//  BURGER MENU

const menuHamburger = document.getElementById("menu-hamburger")
const navLinks = document.getElementById("nav-links")
const body = document.body
        
menuHamburger.addEventListener('click',()=>{navLinks.classList.toggle('mobile-menu')})
menuHamburger.addEventListener('click',()=>{body.classList.toggle('scroll-block')})

function activate(activer) {
    document.getElementById("scroll1").classList.remove("active")
    document.getElementById("scroll2").classList.remove("active")
    document.getElementById("scroll3").classList.remove("active")
    document.getElementById("scroll4").classList.remove("active")
    document.getElementById("scroll5").classList.remove("active")
    document.getElementById(activer).classList.add("active")

    navLinks.classList.remove("mobile-menu")
    body.classList.remove("scroll-block")
}

//  DIAPO

let compteur = 0;
let timer, elements, slides, slideWidth, speed, transition;

window.onload = () => {
    const diapo = document.querySelector(".diapo");
    speed = diapo.dataset.speed * 4;
    
    transition = diapo.dataset.transition;

    elements = document.querySelector(".elements");

    let firstImage = elements.firstElementChild.cloneNode(true);

    elements.appendChild(firstImage);

    slides = Array.from(elements.children);

    slideWidth = diapo.getBoundingClientRect().width;

    timer = setInterval(slideNext, speed);
}

window.onresize = () => {
    const diapo = document.querySelector(".diapo");
    slideWidth = diapo.getBoundingClientRect().width;
}

function slideNext(){
    compteur++;
    elements.style.transition = transition+"ms linear";

    let decal = -slideWidth * compteur;
    elements.style.transform = `translateX(${decal}px)`;

    setTimeout(function(){
        if(compteur >= slides.length - 1){
            compteur = 0;
            elements.style.transition = "unset";
            elements.style.transform = "translateX(0)";
        }
    }, transition);
}

function startTimer(){
    timer = setInterval(slideNext, speed);
}