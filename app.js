// Effet sticky de la navbar

window.onscroll = function() {
    myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = 150;
var marginDiv = document.getElementById("margin")

function myFunction() {
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky")
        marginDiv.classList.add("active");
    } else {
        navbar.classList.remove("sticky");
        marginDiv.classList.remove("active");
    }
}

// Fonction du burger menu

const menuHamburger = document.getElementById("menu-hamburger")
const navLinks = document.getElementById("nav-links")
const body = document.body
        
menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu');
    body.classList.toggle('scroll-block');
})

function disableBurger(){
    navLinks.classList.remove('mobile-menu');
    body.classList.remove('scroll-block');
}

navLinks.addEventListener('click',()=>{
    disableBurger();
})
