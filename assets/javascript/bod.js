var elems = document.querySelectorAll('.carousel');
var instances = M.Carousel.init(elems, 50);
var instance = M.Carousel.getInstance(elems[0]);
const nextcarousel = document.querySelector('.next');
const prevcarousel = document.querySelector('.prev');
nextcarousel.addEventListener('click', () => instance.next())
prevcarousel.addEventListener('click', () => instance.prev())
