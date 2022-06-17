
const burgerMenu = document.getElementById("burger-menu")
const mobileMenu = document.getElementById('mobile-menu')
const blur =  document.getElementsByTagName('body')[0];

burgerMenu.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('active');
    blur.classList.toggle('active');
    burgerMenu.classList.toggle('active')
    
});