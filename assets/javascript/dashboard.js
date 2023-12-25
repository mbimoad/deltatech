

var slideCount = document.querySelectorAll('.slider .slide-item').length;
var slideWidth = document.querySelectorAll('.slider-outer')[0].offsetWidth;
var slideHeight = document.querySelectorAll(".slider-outer")[0].offsetHeight;

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







function initializeCarousel() {
    const carousel = document.querySelector('.projects .carousel');
    const allbox    = document.querySelectorAll('.projects .carousel .box');
    const first     = allbox[0];
    const last      = allbox[allbox.length - 1]; 
    carousel.insertAdjacentHTML('beforeend', first.outerHTML);
    carousel.insertAdjacentHTML('afterbegin', last.outerHTML);
}
initializeCarousel();
const prev = document.querySelector('.projects .prev');
const next = document.querySelector('.projects .next');
prev.addEventListener('click', function () {
    prev.setAttribute('disabled', true);
    const lebar  = document.querySelector('.projects .carousel .box').offsetWidth * 2;
    console.log("========");
    console.log(lebar);
    console.log("========");
    const allbox = document.querySelectorAll('.projects .carousel .box');
    document.querySelectorAll('.projects .carousel .box').forEach(item => {
        item.style.transition = 'all 500ms ease 0s';
        item.style.transform = `translate(-${lebar+30}px, 0)`;
    });
    const first     = allbox[2];
    const last      = allbox[allbox.length - 1]; 
    const carousel = document.querySelector('.projects .carousel');
    carousel.insertAdjacentHTML('beforeend', first.outerHTML);
    setTimeout(() => {
        document.querySelectorAll('.projects .carousel .box').forEach(item => {
            item.style.transition = 'unset';
            item.style.transform = `translate(-${lebar/2}px, 0)`;
        });
        document.querySelector('.projects .carousel .box').remove();
        prev.removeAttribute('disabled');
    }, 500)        
});

next.addEventListener('click', function () {
    next.setAttribute('disabled', true);
    const lebar  = document.querySelector('.projects .carousel .box').offsetWidth * 2;
    const allbox = document.querySelectorAll('.projects .carousel .box');
    document.querySelectorAll('.projects .carousel .box').forEach(item => {
        item.style.transition = 'all 500ms ease 0s';
        item.style.transform = `translate(30px, 0)`;
    });
    const first     = allbox[allbox.length - 3];
    const last      = allbox[allbox.length - 1]; 
    setTimeout(() => {
        const carousel = document.querySelector('.projects .carousel');
        carousel.insertAdjacentHTML('afterbegin', first.outerHTML);
        document.querySelectorAll('.projects .carousel .box').forEach(item => {
            item.style.transition = 'unset';
            item.style.transform = `translate(-${(lebar/2)}px, 0)`;
        });
        last.remove(); 
        next.removeAttribute('disabled');
    }, 500)
});



function getStyle(el, styleProp) {
    var value, defaultView = (el.ownerDocument || document).defaultView;
    // W3C standard way:
    if (defaultView && defaultView.getComputedStyle) {
      // sanitize property name to css notation
      // (hypen separated words eg. font-Size)
      styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
      return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    } else if (el.currentStyle) { // IE
      // sanitize property name to camelCase
      styleProp = styleProp.replace(/\-(\w)/g, function(str, letter) {
        return letter.toUpperCase();
      });
      value = el.currentStyle[styleProp];
      // convert other units to pixels on IE
      if (/^\d+(em|pt|%|ex)?$/i.test(value)) { 
        return (function(value) {
          var oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left;
          el.runtimeStyle.left = el.currentStyle.left;
          el.style.left = value || 0;
          value = el.style.pixelLeft + "px";
          el.style.left = oldLeft;
          el.runtimeStyle.left = oldRsLeft;
          return value;
        })(value);
      }
      return value;
    }
  }





const prev2 = document.querySelector('.partcompany .prev2'); 
    const next2 = document.querySelector('.partcompany .next2'); 
    prev2.addEventListener('click', function() {
        const lebar  = document.querySelector('.partcompany img').offsetWidth * 2;
        const allimg = document.querySelectorAll('.partcompany img');

        const group = document.querySelector('.group'); 
        let gap = parseInt(getStyle(group, 'gap').split('px')[0]);
        document.querySelectorAll('.partcompany img').forEach(item => {
            item.style.transition = 'all 500ms ease 0s';
            item.style.transform = `translate(-${lebar+gap}px, 0)`;
        });

        const first = allimg[0]; 
        setTimeout(() => {
            group.insertAdjacentHTML('beforeend', first.outerHTML);
            first.remove();
            document.querySelectorAll('.partcompany img').forEach(item => {
                item.style.transition = 'unset';
                item.style.transform = `translate(-${(lebar/2)}px, 0)`;
            });
            prev2.removeAttribute('disabled');
        }, 500); 
    })

    next2.addEventListener('click', function() {        
        const lebar  = document.querySelector('.partcompany img').offsetWidth * 1;
        const allimg = document.querySelectorAll('.partcompany img');
        const group = document.querySelector('.group'); 
        let gap = parseInt(getStyle(group, 'gap').split('px')[0]);
        document.querySelectorAll('.partcompany img').forEach(item => {
            item.style.transition = 'all 500ms ease 0s';
            item.style.transform = `translate(0px, 0)`;
        });
        
        const last      = allimg[allimg.length - 1]; 
        console.log(last);
        setTimeout(() => {
            group.insertAdjacentHTML('afterbegin', last.outerHTML);
            last.remove();
            document.querySelectorAll('.partcompany img').forEach(item => {
                item.style.transition = 'unset';
                item.style.transform = `translate(-${lebar+gap}px, 0)`;
            });
            prev2.removeAttribute('disabled');
        }, 500); 
    })



const whowe_h1  = document.querySelector('.whowe h1')
const whowe     = document.querySelector('.whowe');
const whowe_padding = parseInt(getStyle(whowe, 'padding').split('px')[0]) * 3; 
const whowe_target  = whowe_h1.offsetTop - whowe_padding

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if(scroll > whowe_target) {
        document.querySelector('.navbar').classList.add('active'); 
        document.querySelector('.header-bar').style.top = '-100%'; 
    } else {
        document.querySelector('.navbar').classList.remove('active');
        document.querySelector('.header-bar').style.top = '0'; 
    }
});




const listmenu_button = document.querySelectorAll('.latest-news .list-menu button');
console.log(listmenu_button);


listmenu_button.forEach(item => item.addEventListener('click', function() {
    listmenu_button.forEach(item => {
        if(item.classList.contains('active')) item.classList.remove('active');
    })
    this.classList.add('active');
}))
