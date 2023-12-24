const rotatebox = document.querySelector('.sitemap .box'); 
const menuoverlay = document.querySelector('.menu-overlay'); 
rotatebox.addEventListener('click', function() {   
    console.log(this);
    rotatebox.classList.toggle('rotate');
    menuoverlay.classList.toggle('show');
    if(menuoverlay.classList.contains('show')) {
        document.querySelector('.header-bar a').style.display = 'none';
        document.querySelector('.header-bar span').style.display = 'none';
        this.style.background = 'white';
        this.querySelector('span').style.color = '#2aabe2';
    } else {
        document.querySelector('.header-bar a').style.display = 'unset';
        document.querySelector('.header-bar span').style.display = 'unset';
        this.style.background = '#2aabe2';
        this.querySelector('span').style.color = 'white';
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


var slideCount = document.querySelectorAll('.slider .slide-item').length;
var slideWidth = document.querySelectorAll('.slider-outer')[0].offsetWidth;
var slideHeight = document.querySelectorAll(".slider-outer")[0].offsetHeight;

var sliderUlWidth = slideCount * slideWidth;
document.querySelectorAll('.slider')[0].style.cssText = "width:" + sliderUlWidth + "px";

for (var i = 0; i < slideCount; i++) {
  document.querySelectorAll('.slide-item')[i].style.cssText = "width:" + slideWidth + "px;height:" + slideHeight + "px";
}

// setInterval(function() {
//   moveRight();
// }, 3000);
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



// Carousel Infinite 
var index = 0,
    amount = 0,
    currTransl = [],
    translationComplete = true,
    moveOffset = 0;

var transitionCompleted = function(){
    translationComplete = true;
}

document.addEventListener("DOMContentLoaded", function(event) 
{
    var carousel = document.getElementById('carousel');

    amount = document.getElementsByClassName("slide").length;
    // get the width of the container
    moveOffset = parseInt(window.getComputedStyle(document.getElementById('carousel-container')).width, 10);
    // calcuate the width of the carousel
    document.getElementById('carousel').style.width = (amount * moveOffset) + 'px';
    // prevent multiple click when transition
    for(var i = 0; i < amount; i++)
    {
        currTransl[i] = -moveOffset;
        document.getElementsByClassName("slide")[i].addEventListener("transitionend", transitionCompleted, true);                    
        document.getElementsByClassName("slide")[i].addEventListener("webkitTransitionEnd", transitionCompleted, true);                    
        document.getElementsByClassName("slide")[i].addEventListener("oTransitionEnd", transitionCompleted, true);                    
        document.getElementsByClassName("slide")[i].addEventListener("MSTransitionEnd", transitionCompleted, true);                  
    }
    // add the last item to the start so that translateX(-moveOffset) works (In case the first click is the previous button)
    document.getElementById('carousel').insertBefore(document.getElementById('carousel').children[4], document.getElementById('carousel').children[0])
    // add click events to control arrows
    document.getElementById('prev').addEventListener('click', prev, true);
    document.getElementById('next').addEventListener('click', next, true);
});

function prev()
{
    if (translationComplete === true)
    {
        translationComplete = false;
        index--;
        if (index == -1)
        {
            index = amount-1;
        }
        var outerIndex = (index) % amount;
        for (var i = 0; i < amount; i++)
        {
            var slide = document.getElementsByClassName("slide")[i];    
            slide.style.opacity = '1';    
            slide.style.transform = 'translateX('+(currTransl[i]+moveOffset)+'px)';
            currTransl[i] = currTransl[i]+moveOffset;
        }
        var outerSlide = document.getElementsByClassName("slide")[outerIndex];
        outerSlide.style.transform = 'translateX('+(currTransl[outerIndex]-(moveOffset*amount))+'px)';
        outerSlide.style.opacity = '0';
        currTransl[outerIndex] = currTransl[outerIndex]-moveOffset*(amount);
    }
}

function next()
{
    if (translationComplete === true)
    {
        translationComplete = false;
        var outerIndex = (index) % amount;
        index++;
        for(var i = 0; i < amount; i++)
        {
            var slide = document.getElementsByClassName("slide")[i];    
            slide.style.opacity = '1';    
            slide.style.transform = 'translateX('+(currTransl[i]-moveOffset)+'px)';
            currTransl[i] = currTransl[i]-moveOffset;
        }
        var outerSlide = document.getElementsByClassName("slide")[outerIndex];
        outerSlide.style.transform = 'translateX('+(currTransl[outerIndex]+(moveOffset*amount))+'px)';
        outerSlide.style.opacity = '0';
        currTransl[outerIndex] = currTransl[outerIndex]+moveOffset*(amount);
    }
}