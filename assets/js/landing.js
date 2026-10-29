/* landing.js - beranda: peta 24 titik, formulir login (modal), animasi angka & muncul */

// ================= PETA 24 LOKASI =================
const LOCATIONS = [
  { id: 1, name: '1. Jambi', lat: -1.6003244458496575, lng: 103.59618203786783, status: 'Aktif' },
  { id: 2, name: '2. Muara Bungo', lat: -1.4872583201691187, lng: 102.11779933640346, status: 'Aktif' },
  { id: 3, name: '3. Merangin Bangko', lat: -2.072327381813301, lng: 102.27694158561357, status: 'Aktif' },
  { id: 4, name: '4. Muaro Jambi Sengeti', lat: -1.479183722135715, lng: 103.50548277116462, status: 'Aktif' },
  { id: 5, name: '5. Sarolangun Lintas Sumatera', lat: -2.3032880168240486, lng: 102.71345275582313, status: 'Aktif' },
  { id: 6, name: '6. Batanghari Muara Bulian', lat: -1.7036984349795665, lng: 103.2665303288354, status: 'Aktif' },
  { id: 7, name: '7. Tanjung Jabung Muara Tungkal', lat: -0.8225767117801819, lng: 103.46080373253064, status: 'Aktif' },
  { id: 8, name: '8. Sungai Penuh Yos Sudarso', lat: -2.074569898533324, lng: 101.40430408835373, status: 'Aktif' },
  { id: 9, name: '9. Palembang', lat: -2.9739871692076543, lng: 104.75333780036112, status: 'Sangat Aktif' },
  { id: 12, name: '12. Muara Enim', lat: -3.6302238364994253, lng: 103.7756967533442, status: 'Aktif' },
  { id: 13, name: '13. Banyuasin Pangkalan Balai', lat: -2.9170572760018696, lng: 104.42172061349386, status: 'Aktif' },
  { id: 14, name: '14. Lubuk Linggau Yos Sudarso', lat: -3.2825601315184754, lng: 102.88773988650611, status: 'Aktif' },
  { id: 15, name: '15. Lahat Pasar Lama', lat: -3.7795918010078675, lng: 103.55941594232927, status: 'Aktif' },
  { id: 16, name: '16. OKU Baturaja Timur', lat: -4.122194592440136, lng: 104.17501242883539, status: 'Aktif' },
  { id: 17, name: '17. Prabumulih Sudirman', lat: -3.3958344000740426, lng: 104.26522958465848, status: 'Aktif' },
  { id: 10, name: '10. Bengkulu', lat: -3.822861195793757, lng: 102.2989164711646, status: 'Aktif' },
  { id: 18, name: '18. Arga Makmur', lat: -3.441978805184108, lng: 102.1799694711646, status: 'Aktif' },
  { id: 19, name: '19. Rejang Lebong Curup', lat: -3.4719106404856577, lng: 102.53220319733282, status: 'Aktif' },
  { id: 11, name: '11. Pangkal Pinang', lat: -2.0990587620001397, lng: 106.11133508650612, status: 'Aktif' },
  { id: 20, name: '20. Bandar Lampung', lat: -5.4406297953820575, lng: 105.25593548999109, status: 'Sangat Aktif' },
  { id: 21, name: '21. Lampung Selatan Kalianda', lat: -5.719752249621101, lng: 105.5855414269938, status: 'Aktif' },
  { id: 22, name: '22. Pringsewu Sudirman', lat: -5.354245041581658, lng: 104.97324632161101, status: 'Aktif' },
  { id: 23, name: '23. Kota Metro Nasution', lat: -5.10617124737937, lng: 105.33339055414163, status: 'Aktif' },
  { id: 24, name: '24. Tulang Bawang Banjar Agung', lat: -4.290952308666126, lng: 105.22287191181242, status: 'Aktif' }
];

let map = null;

function createPulseIcon() {
  return L.divIcon({
    className: 'custom-pulse-marker',
    html: '<div class="ring"></div><div class="core"></div>',
    iconSize: [18, 18],
    iconAnchor: [9, 9]
  });
}

function escHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function initMap() {
  const el = document.getElementById('map');
  if (!el || typeof L === 'undefined') return;       // Leaflet belum termuat (tanpa internet)
  if (map !== null) { map.invalidateSize(); return; }

  map = L.map('map', { zoomControl: true, attributionControl: true });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18, minZoom: 4, attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const latLngs = [];
  LOCATIONS.forEach(loc => {
    const latLng = [loc.lat, loc.lng];
    latLngs.push(latLng);
    const marker = L.marker(latLng, { icon: createPulseIcon() }).addTo(map);
    marker.bindPopup(
      '<div style="font-weight:700;color:#88C438;font-size:13px">' + escHtml(loc.name) + '</div>' +
      '<div style="color:#e2e8f0;margin-top:2px">Koordinat: <span style="color:#94a3b8;font-size:11px">' + loc.lat.toFixed(4) + ', ' + loc.lng.toFixed(4) + '</span></div>' +
      '<div style="color:#e2e8f0;margin-top:2px">Status: <b style="color:#88C438">' + escHtml(loc.status) + '</b></div>'
    );
    marker.on('mouseover', function () { this.openPopup(); });
  });
  map.fitBounds(L.latLngBounds(latLngs), { padding: [30, 30] });
}

// ================= FORMULIR LOGIN (modal) =================
const PERAN = ['pelayanan', 'kepesertaan', 'kearsipan'];

function sembunyikanError() {
  const box = document.getElementById('login-error');
  if (box) box.classList.remove('tampil');
}

function bukaLogin(peran) {
  const modal = document.getElementById('form-login-section');
  const pilih = document.getElementById('role-select');
  if (!modal) return;
  if (peran && PERAN.indexOf(peran) !== -1) pilih.value = peran;
  sembunyikanError();
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  setTimeout(() => { const u = document.getElementById('login-username'); if (u) u.focus(); }, 50);
}

function tutupLogin() {
  const modal = document.getElementById('form-login-section');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  const f = document.getElementById('login-form');
  if (f) f.reset();
  sembunyikanError();
}

document.addEventListener('DOMContentLoaded', () => {
  initMap();

  // Semua tautan/tombol bertanda data-login membuka formulir (tanpa pindah halaman)
  document.querySelectorAll('[data-login]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      bukaLogin(el.getAttribute('data-login'));
    });
  });

  const modal = document.getElementById('form-login-section');
  if (modal) modal.addEventListener('click', e => { if (e.target === modal) tutupLogin(); });
  const tutup = document.getElementById('login-tutup');
  if (tutup) tutup.addEventListener('click', tutupLogin);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') tutupLogin(); });

  ['login-username', 'login-password', 'role-select'].forEach(id => {
    const n = document.getElementById(id);
    if (n) { n.addEventListener('input', sembunyikanError); n.addEventListener('change', sembunyikanError); }
  });

  const lupa = document.getElementById('lupa-password');
  if (lupa) lupa.addEventListener('click', e => {
    e.preventDefault();
    alert('Hubungi administrator sistem untuk mengatur ulang password.');
  });

  // Bila formulir terbuka dari server (error / ?login=), fokuskan ke isian yang tepat
  if (modal && modal.classList.contains('open')) {
    const u = document.getElementById('login-username');
    if (u) u.focus();
  }

  // Animasi angka & kartu muncul saat di-scroll
  const kurangGerak = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  function countUp(el, to) {
    if (kurangGerak) { el.textContent = to.toLocaleString('id-ID'); return; }
    const t0 = performance.now(), dur = 1100;
    const f = t => {
      const p = Math.min(1, (t - t0) / dur);
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))).toLocaleString('id-ID');
      if (p < 1) requestAnimationFrame(f);
    };
    requestAnimationFrame(f);
  }
  document.querySelectorAll('.count').forEach(n => countUp(n, +n.dataset.to));

  const io = 'IntersectionObserver' in window
    ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); } }), { threshold: 0.12 })
    : null;
  document.querySelectorAll('.reveal').forEach(n => io ? io.observe(n) : n.classList.add('show'));
});
