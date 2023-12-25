<?php
$halaman = isset($_GET['halaman']) ? $_GET['halaman'] : 'dashboard'; 
switch($halaman):
    case 'dashboard':
        $judul = "dashboard";
    break;
    case 'about': 
        $judul = "about";
    break;
endswitch; 

$style = "./assets/$judul.css"; 

include "./components/header.php"; 
include "./components/navbar.php"; 
include "./pages/$judul.php"; 
include "./components/footer.php"; 
?>