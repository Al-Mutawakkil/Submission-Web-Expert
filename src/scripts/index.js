import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import data from '../DATA.json'

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector("main");
const drawer = document.querySelector("#drawer");

menu.addEventListener("click", function (event) {
    drawer.classList.toggle("open");
    event.stopPropagation;
});

menu.addEventListener("keypress", function (event) {
    if (event.key === "Enter" || event.keyCode === 32) {
        event.preventDefault();
        event.stopPropagation;
        drawer.classList.toggle("open");
    }
});

hero.addEventListener("click", function () {
    drawer.classList.remove("open");
});

main.addEventListener("click", function () {
    drawer.classList.remove("open");
});

// data restaurant dikirim ke html
let result = ''

data.restaurants.forEach((restaurant) => {
    let description = "";

    if(restaurant.description) {
        description = restaurant.description.slice(0, 300)
    }

    result += `
        <article class="post-item">
            <img class="post-item__thumbnail" src="${restaurant.pictureId}" alt="${restaurant.name}">
            <div class="post-item__rating">
                <p class="post-item__rating-tv">Rating:</p>
                <p class="post-item__rating-value"><i class="fas fa-star"></i> ${restaurant.rating}</p>
            </div>
            <div class="post-item__content">
                <p class="post-item__city"><i class="fas fa-map-marker-alt"></i> Kota ${restaurant.city}</p>
                <h1 class="post-item__title">
                    <a aria-label="${restaurant.name}" href="#">${restaurant.name}</a>
                </h1>
                <p class="post-item__description">${description} <span>Read More...</span></p>
            </div>
        </article>
    `;

    document.getElementById('posts').innerHTML = result;
})