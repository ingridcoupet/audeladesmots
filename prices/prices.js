let requestURL = document.location.href + '/prices/prices.json';
alert(requestURL);
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
