var slideCount    = document.querySelectorAll('.slider .slide-item').length;
var slideWidth    = document.querySelectorAll('.slider-outer')[0].offsetWidth;
var slideHeight   = document.querySelectorAll(".slider-outer")[0].offsetHeight;
var sliderUlWidth = slideCount * slideWidth;
document.querySelectorAll('.slider')[0].style.cssText = "width:" + sliderUlWidth + "px";

for (var i = 0; i < slideCount; i++) {
  document.querySelectorAll('.slide-item')[i].style.cssText = "width:" + slideWidth + "px;height:" + slideHeight + "px";
}

var counter = 1;

function moveRight() {
  var slideNum = counter++;
  if (slideNum < slideCount) {
      console.log("esini box");
      var transformSize = slideWidth * slideNum;
      console.log(slideWidth);
      console.log(sliderUlWidth);
      document.querySelectorAll('.slider')[0].style.cssText = "width:" + sliderUlWidth + "px; -webkit-transition:all 800ms ease; -webkit-transform:translate3d(-" + transformSize + "px, 0px, 0px);-moz-transition:all 800ms ease; -moz-transform:translate3d(-" + transformSize + "px, 0px, 0px);-o-transition:all 800ms ease; -o-transform:translate3d(-" + transformSize + "px, 0px, 0px);transition:all 800ms ease; transform:translate3d(-" + transformSize + "px, 0px, 0px)";
  } 
}

function moveLeft() {
    var slideNum = counter--;
    if (counter == 1) {
        document.querySelectorAll('.slider')[0].style.cssText = "width:" + sliderUlWidth + "px;-webkit-transition:all 800ms ease; -webkit-transform:translate3d(0px, 0px, 0px);-moz-transition:all 800ms ease; -moz-transform:translate3d(0px, 0px, 0px);-o-transition:all 800ms ease; -o-transform:translate3d(0px, 0px, 0px);transition:all 800ms ease; transform:translate3d(0px, 0px, 0px)";
    } else {
        var transformSize = slideWidth;
        console.log('kesini bosquee');
        console.log(slideWidth);
        document.querySelectorAll('.slider')[0].style.cssText = "width:" + sliderUlWidth + "px; -webkit-transition:all 800ms ease; -webkit-transform:translate3d(-" + transformSize + "px, 0px, 0px);-moz-transition:all 800ms ease; -moz-transform:translate3d(-" + transformSize + "px, 0px, 0px);-o-transition:all 800ms ease; -o-transform:translate3d(-" + transformSize + "px, 0px, 0px);transition:all 800ms ease; transform:translate3d(-" + transformSize + "px, 0px, 0px)";
    }      
}

const nextcarousel = document.querySelector('.next-carousel'); 
const prevcarousel = document.querySelector('.prev-carousel'); 

// VARIABEL
let contentlength = document.querySelectorAll('.slider .slide-item').length; 
let currentslide  = 1; 

// GET ELEMENT
const maxlength     = document.querySelector('.maxlength');
const current       = document.querySelector('.current');

// Inisialisasi
maxlength.innerHTML = '0' + contentlength; 
current.innerHTML   = '0' + currentslide; 

nextcarousel.addEventListener('click', function() {
    if(currentslide == contentlength) {
        nextcarousel.style.color = "#ccc"; 
        nextcarousel.style.pointer = 'none';
    } else {
        currentslide++; 
        current.innerHTML = '0' + currentslide; 
        moveRight(); 
    }
})
prevcarousel.addEventListener('click', function() {
    if(currentslide == 1) {
        prevcarousel.style.color = "#ccc"; 
        prevcarousel.style.pointer = 'none';
    } else {
        currentslide--; 
        current.innerHTML = '0' + currentslide; 
        moveLeft(); 
    }
})
