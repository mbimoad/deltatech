const togglebox = document.querySelectorAll('.toggle-box'); 
console.log(togglebox);
togglebox.forEach(item => item.addEventListener('click', function() {
    this.classList.toggle('active');
}));