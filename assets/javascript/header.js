const rotatebox = document.querySelector('.sitemap .box'); 
const menuoverlay = document.querySelector('.menu-overlay'); 
rotatebox.addEventListener('click', function() {   
    console.log(this);
    rotatebox.classList.toggle('rotate');
    menuoverlay.classList.toggle('show');
    if(menuoverlay.classList.contains('show')) {
        console.log(this);
        document.querySelector('.header-bar h3').style.opacity = '1'; 
        document.querySelector('.header-bar h3').style.cursorPointer = 'unset'; 
        document.querySelector('.header-bar a').style.display = 'none';
        document.querySelector('.header-bar span').style.display = 'none';
        this.classList.add('active'); 
        this.querySelector('span').classList.add('active')
    } else {
        document.querySelector('.header-bar h3').style.opacity = '0'; 
        document.querySelector('.header-bar h3').style.cursorPointer = 'none'; 
        document.querySelector('.header-bar a').style.display = 'unset';
        document.querySelector('.header-bar span').style.display = 'unset';
        this.classList.remove('active'); 
        this.querySelector('span').classList.remove('active')
    }
});

const mainarrow = document.querySelectorAll('.main-arrow'); 
console.log(mainarrow);
mainarrow.forEach(item => item.addEventListener('mouseover', function() {
    this.querySelector('.submenu1').style.display = "flex"; 
    this.querySelector('.hiddenel1').style.display = "block"; 
    this.querySelector('.fa-sort-down').style.display = 'none';
    this.querySelector('.fa-sort-up').style.display = 'unset';
}))
mainarrow.forEach(item => item.addEventListener('mouseleave', function() {
    this.querySelector('.submenu1').style.display = "none"; 
    this.querySelector('.hiddenel1').style.display = "none"; 
    this.querySelector('.fa-sort-down').style.display = 'unset';
    this.querySelector('.fa-sort-up').style.display = 'none';
}))

const secondarrow = document.querySelectorAll('.second-arrow'); 
secondarrow.forEach(item => item.addEventListener('mouseover', function() {
    this.querySelector('.submenu2').style.display = "flex"; 
    this.querySelector('.hiddenel2').style.display = "block"; 
}))

secondarrow.forEach(item => item.addEventListener('mouseleave', function() {
    this.querySelector('.submenu2').style.display = "none"; 
    this.querySelector('.hiddenel2').style.display = "none"; 
}))


const searchbtn = document.querySelector('.searchbtn'); 
const searchoverlay = document.querySelector('.search-overlay'); 
let toggle = true; 
searchbtn.addEventListener('click', function() {
    vdisplay = toggle ? 'flex' : 'none'; 
    toggle  = !toggle; 
    searchoverlay.style.display = vdisplay; 
    console.log(toggle);
    if(!toggle) {
        const closebtn = document.querySelector('.close'); 
        closebtn.addEventListener('click', function() {
            searchoverlay.style.display = 'none'; 
            toggle = true; 
        })
    }
})
