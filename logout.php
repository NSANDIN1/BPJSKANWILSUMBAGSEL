<?php
require_once __DIR__ . '/config/auth.php';
logout_sesi();
header('Location: ' . base_url() . '/index.php');
exit;
