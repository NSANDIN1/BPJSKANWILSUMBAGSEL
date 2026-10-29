/* publik.js - skrip bersama halaman publik: menu dropdown Dashboard */
(function () {
  const dd = document.getElementById('dropdownBisnis');
  const menu = document.getElementById('dropdownMenu');
  const arrow = document.getElementById('arrowIcon');
  const toggle = document.getElementById('ddToggle');
  if (!dd || !menu || !toggle) return;

  function tutup() {
    menu.classList.add('hidden');
    arrow.classList.remove('rotate-180');
    toggle.setAttribute('aria-expanded', 'false');
  }
  toggle.addEventListener('click', function () {
    const buka = menu.classList.toggle('hidden') === false;
    arrow.classList.toggle('rotate-180', buka);
    toggle.setAttribute('aria-expanded', buka ? 'true' : 'false');
  });
  window.addEventListener('click', function (e) { if (!dd.contains(e.target)) tutup(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') tutup(); });
})();
