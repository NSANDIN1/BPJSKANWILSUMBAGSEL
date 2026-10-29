/* pelayanan_main.js - fungsi bersama + logika beranda Pelayanan (pelayanan/index.php).
   Data laporan (REPORT_DATA) disediakan oleh pelayanan/data.php. Sidebar dirender oleh PHP. */

const MONTH_NAMES = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli",
  "Agustus", "September", "Oktober", "November", "Desember"];

/* Bulan tersedia jika ada di REPORT_DATA (js/data.js) */
function isAvailable(n) {
  return typeof REPORT_DATA !== "undefined" && !!REPORT_DATA[String(n)];
}

/* ---------- Format angka (bahasa Indonesia) ---------- */
const nf0 = new Intl.NumberFormat("id-ID", { maximumFractionDigits: 0 });
const nf2 = new Intl.NumberFormat("id-ID", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
function fInt(v) { return v == null ? "-" : nf0.format(v); }
function fDec(v) { return v == null ? "-" : nf2.format(v); }
function fPctRatio(v) { return v == null ? "-" : nf2.format(v * 100) + "%"; }   /* 0.9998 -> 99,98% */
function fPct(v) { return v == null ? "-" : nf2.format(v) + "%"; }              /* 99.9  -> 99,90% */
function fRp(v) { return v == null ? "-" : "Rp " + nf0.format(v); }
function fRpShort(v) {
  if (v == null) return "-";
  if (Math.abs(v) >= 1e9) return "Rp " + nf2.format(v / 1e9) + " M";
  if (Math.abs(v) >= 1e6) return "Rp " + nf2.format(v / 1e6) + " jt";
  return "Rp " + nf0.format(v);
}
function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/* ---------- Halaman utama ---------- */
function initHome() {
  const select = document.getElementById("bulan");
  const status = document.getElementById("status");
  const grid = document.getElementById("month-grid");
  const btn = document.getElementById("btn-lihat");
  const hc = document.getElementById("home-cards");
  if (hc) {
    const av = MONTH_NAMES.map((_, i) => i + 1).filter(isAvailable);
    const last = av.length ? av[av.length - 1] : null;
    const c = (l, v, sub, ic) => '<div class="card"><div class="cbody"><div class="label">' + l + '</div><div class="value">' + v + '</div><div class="sub">' + sub +
      '</div></div><span class="ico"><i class="fa-solid ' + ic + '"></i></span></div>';
    hc.innerHTML = c("Bulan Tersedia", av.length + " / 12", "Laporan yang sudah dimuat", "fa-calendar-check") +
      c("Belum Tersedia", 12 - av.length, "Menampilkan “Data belum tersedia”", "fa-hourglass-half") +
      c("Laporan Terbaru", last ? MONTH_NAMES[last - 1] : "-", last ? esc(REPORT_DATA[String(last)].periode || "") : "Belum ada data", "fa-file-circle-check");
  }

  MONTH_NAMES.forEach((name, i) => {
    const n = i + 1;
    const opt = document.createElement("option");
    opt.value = n;
    opt.textContent = isAvailable(n) ? name + " — Tersedia" : name + " — Data belum tersedia";
    select.appendChild(opt);

    const a = document.createElement("a");
    a.className = "month-tile " + (isAvailable(n) ? "ok" : "off");
    a.href = "laporan.php?bulan=" + n;
    a.innerHTML = '<div class="mi"><i class="fa-regular ' + (isAvailable(n) ? "fa-calendar-check" : "fa-calendar") + '"></i></div><div><strong>' + name + "</strong><span>" +
      (isAvailable(n) ? "Data tersedia" : "Data belum tersedia") + "</span></div>";
    grid.appendChild(a);
  });

  /* pilih bulan pertama yang tersedia sebagai nilai awal */
  const first = MONTH_NAMES.findIndex((_, i) => isAvailable(i + 1));
  if (first >= 0) select.value = first + 1;

  function updateStatus() {
    const n = Number(select.value);
    if (isAvailable(n)) {
      status.className = "status-box ok";
      status.innerHTML = '<i class="fa-solid fa-circle-check"></i><span>Data ' + MONTH_NAMES[n - 1] + " tersedia. Klik “Lihat Laporan” untuk membuka.</span>";
    } else {
      status.className = "status-box warn";
      status.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i><span>Data ' + MONTH_NAMES[n - 1] + " belum tersedia.</span>";
    }
  }
  select.addEventListener("change", updateStatus);
  updateStatus();

  btn.addEventListener("click", () => {
    const n = Number(select.value);
    if (!isAvailable(n)) {
      status.className = "status-box warn";
      status.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i><span>Laporan bulan ' + MONTH_NAMES[n - 1] +
        " belum tersedia. Silakan pilih bulan yang bertanda “Tersedia”.</span>";
      return;                       /* tidak membuka data bulan lain */
    }
    window.location.href = "laporan.php?bulan=" + n;
  });
}

/* ---------- Menu untuk layar kecil (sidebar sudah dirender PHP) ---------- */
function initShell() {
  const btn = document.getElementById("menu-btn"), back = document.getElementById("sb-backdrop"), sb = document.getElementById("sidebar");
  if (!btn || !back || !sb) return;
  function setOpen(open) {
    document.body.classList.toggle("nav-open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  }
  btn.addEventListener("click", () => setOpen(!document.body.classList.contains("nav-open")));
  back.addEventListener("click", () => setOpen(false));
  document.addEventListener("keydown", e => { if (e.key === "Escape") setOpen(false); });
  sb.addEventListener("click", e => { if (e.target.closest("a")) setOpen(false); });
}
