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

// TARIFS

let requestURL = 'prices.json'
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function heroes() {
    const prices = request.response;
    printAllPrices(prices)
}

function printAllPrices(prices) {
    for (let i = 0; i < prices.length; i++) {
        var dir = document.getElementById("price-container");
        var newPriceClass = document.createElement("div");
        var priceTitle = prices[i].title;
        var priceImg = prices[i].img;
        var priceDesc = prices[i].desc;
        var priceCost = prices[i].cost;
        newPriceClass.classList.add("price-box");
        newPriceClass.innerHTML = `<h1 class="price-title" id="price1">${priceTitle}</h1><img src="${priceImg}" alt="Image de l\'offre ${prices[i].id}" class="price-image"><p class="price-desc">${priceDesc}</p><p class="price-cost">${priceCost}</p>`;
        dir.appendChild(newPriceClass);
    }
}
