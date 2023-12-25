const menuicon = document.querySelectorAll('.business-line .icon i'); 
const menuh3   = document.querySelectorAll('.business-line h3')
const menup    = document.querySelectorAll('.business-line p')



menuicon.forEach((item,index) => item.addEventListener('mouseover', function() {
    this.classList.add('animate'); 
    menuh3[index].classList.add('animate');
    menup[index].classList.add('animate');
}))

menuicon.forEach((item,index) => item.addEventListener('mouseleave', function() {
    this.classList.remove('animate'); 
    menuh3[index].classList.remove('animate');
    menup[index].classList.remove('animate');
}))