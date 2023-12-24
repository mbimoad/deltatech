<?php
$halaman = isset($_GET['halaman']) ? $_GET['halaman'] : 'dashboard'; 
$style   = "style"; 
switch($halaman):
    case 'dashboard':
        $judul = "dashboard";
        $style = "./assets/style.css"; 
    break;
    case 'admin': 
        $judul = "Halaman Admin";
    break;
endswitch; 



include "./components/header.php"; 
include "./components/navbar.php"; 
include "./pages/$judul.php"; 
include "./components/footer.php"; 
?>