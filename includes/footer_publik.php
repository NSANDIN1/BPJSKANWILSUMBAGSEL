<?php /** footer_publik.php - penutup halaman publik. Set $extraFoot (skrip tambahan) bila perlu. */ ?>
<footer class="site-footer">
    &copy; <?= e(date('Y')) ?> BPJS Ketenagakerjaan Wilayah Sumbagsel. All rights reserved.
</footer>

<script src="<?= e(aset('js/publik.js')) ?>"></script>
<?= $extraFoot ?? '' ?>
</body>
</html>
