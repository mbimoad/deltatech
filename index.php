<?php
$halaman = isset($_GET['halaman']) ? $_GET['halaman'] : 'bod'; 
switch($halaman):
    case $halaman: 
        $judul = $halaman;
    break;
endswitch; 

$style = "./assets/$judul.css"; 

include "./components/header.php"; 
include "./components/navbar.php"; 
include "./pages/$judul.php"; 
include "./components/footer.php"; 
?>