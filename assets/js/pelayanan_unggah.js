/* pelayanan_unggah.js - unggah Excel/PDF pada halaman Monthly Report (pelayanan/index.php).
   Mengirim file ke api.php (disimpan permanen di server, isinya dibaca dan ditulis ke data/laporan_data.js),
   lalu memuat ulang halaman supaya angka pada laporan dan dashboard langsung memakai data terbaru. */
(function () {
  const $ = id => document.getElementById(id);
  const metaCsrf = document.querySelector('meta[name="csrf"]');
  const CSRF = metaCsrf ? metaCsrf.content : "";
  const input = $("u-file"), btn = $("u-btn"), box = $("u-status"), tbody = $("u-daftar"), sel = $("u-bulan");
  if (!input) return;

  MONTH_NAMES.forEach((m, i) => { const o = document.createElement("option"); o.value = i + 1; o.textContent = m; sel.appendChild(o); });

  function pesan(jenis, html) {                       /* jenis: ok | warn | "" (netral) */
    box.className = "status-box " + jenis;
    box.style.display = "flex";
    box.innerHTML = html;
  }
  const ikon = { ok: "fa-circle-check", warn: "fa-circle-exclamation", "": "fa-spinner fa-spin" };

  function tgl(s) {
    const d = new Date(String(s).replace(" ", "T"));
    return isNaN(d) ? esc(s) : d.toLocaleString("id-ID", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
  }
  function ukuran(b) { return b >= 1048576 ? (b / 1048576).toFixed(1) + " MB" : Math.max(1, Math.round(b / 1024)) + " KB"; }

  async function muatDaftar() {
    try {
      const r = await fetch("api.php?aksi=daftar", { cache: "no-store" });
      const j = await r.json();
      if (!j.ok) throw new Error(j.pesan);
      tbody.innerHTML = j.daftar.length ? j.daftar.map(x =>
        '<tr><td class="u-nama" title="' + esc(x.nama_asli) + '">' + esc(x.nama_asli) + ' <small style="color:var(--slate-400)">(' + ukuran(x.ukuran) + ')</small></td>' +
        "<td>" + esc(x.jenis) + "</td><td>" + esc(x.bulan || "-") + "</td><td>" + tgl(x.tgl_unggah) + "</td>" +
        '<td><span class="u-badge ' + (x.status === "berhasil" ? "ok" : "err") + '" title="' + esc(x.pesan || "") + '">' +
        (x.status === "berhasil" ? "Data terbaca" : "Gagal dibaca") + "</span></td>" +
        '<td><a href="uploads/' + encodeURIComponent(x.nama_simpan) + '" target="_blank" rel="noopener">' + (x.jenis === "PDF" ? "Buka" : "Unduh") + '</a> &nbsp; <button type="button" class="u-hapus" data-id="' + Number(x.id) + '" style="border:0;border-radius:8px;padding:6px 10px;background:#fff1f2;color:#b91c1c;cursor:pointer;font-weight:600">Hapus riwayat</button></td></tr>').join("")
        : '<tr><td colspan="6" class="u-kosong">Belum ada file yang diunggah.</td></tr>';
    } catch (e) {
      tbody.innerHTML = '<tr><td colspan="6" class="u-kosong">Daftar tidak bisa dimuat. Buka website lewat server PHP (mis. php -S localhost:8000).</td></tr>';
    }
  }

  tbody.addEventListener("click", async (ev) => {
    const tombol = ev.target.closest(".u-hapus");
    if (!tombol) return;
    const id = tombol.dataset.id;
    if (!id || !confirm("Hapus riwayat unggahan ini? File dan data laporan tidak akan dihapus.")) return;
    tombol.disabled = true;
    tombol.textContent = "Menghapus…";
    try {
      const fd = new FormData();
      fd.append("id", id);
      const r = await fetch("api.php?aksi=hapus", { method: "POST", body: fd, headers: { "X-CSRF-Token": CSRF } });
      const j = await r.json();
      if (!r.ok || !j.ok) throw new Error(j.pesan || "Riwayat gagal dihapus.");
      await muatDaftar();
    } catch (e) {
      alert(e.message || "Riwayat gagal dihapus.");
      tombol.disabled = false;
      tombol.textContent = "Hapus riwayat";
    }
  });

  input.addEventListener("change", async () => {
    const f = input.files[0];
    if (!f) return;
    if (!/\.(xlsx|xls|pdf)$/i.test(f.name)) { pesan("warn", '<i class="fa-solid ' + ikon.warn + '"></i><span>Format file harus .xlsx, .xls, atau .pdf.</span>'); input.value = ""; return; }
    btn.classList.add("busy");
    pesan("", '<i class="fa-solid ' + ikon[""] + '"></i><span>Mengunggah dan membaca “' + esc(f.name) + '”…</span>');
    const fd = new FormData();
    fd.append("file", f);
    fd.append("bulan", sel.value);
    try {
      const r = await fetch("api.php?aksi=unggah", { method: "POST", body: fd, headers: { "X-CSRF-Token": CSRF } });
      let j; try { j = await r.json(); } catch (e) { throw new Error("Server tidak merespons dengan benar. Pastikan website dibuka lewat server PHP."); }
      const ok = !!j.ok;
      const teks = ok ? "Berhasil diunggah. " + (j.pesan || "") : (j.tersimpan ? "File tersimpan, tetapi datanya belum terbaca. " : "Gagal mengunggah. ") + (j.pesan || "");
      if (ok) {
        try { sessionStorage.setItem("unggah_pesan", teks); } catch (e) {}
        location.reload();                              /* angka & kotak bulan dihitung ulang dari data.js terbaru */
        return;
      }
      pesan("warn", '<i class="fa-solid ' + ikon.warn + '"></i><span>' + esc(teks) + "</span>");
      muatDaftar();
    } catch (e) {
      pesan("warn", '<i class="fa-solid ' + ikon.warn + '"></i><span>' + esc(e.message || "Gagal mengunggah.") + "</span>");
    } finally {
      btn.classList.remove("busy");
      input.value = "";
    }
  });

  try {
    const p = sessionStorage.getItem("unggah_pesan");
    if (p) { sessionStorage.removeItem("unggah_pesan"); pesan("ok", '<i class="fa-solid ' + ikon.ok + '"></i><span>' + esc(p) + "</span>"); }
  } catch (e) {}
  muatDaftar();
})();
