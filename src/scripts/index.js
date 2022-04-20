import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/main.scss';
import hero from '../public/images/heros/hero-image_2.jpg';
import aboutImage from '../public/images/assets/ditor.jpg';
import data from '../DATA.json'
console.log('Hello Coders! :)');

const heroImage = document.querySelector('.hero-image');
heroImage.style.backgroundImage = `url(${hero})`;


const listRestaurantsElement = document.querySelector('.list-restaurant-items');
const hamburgerButtonElement = document.querySelector('.hamburger-button');
const drawerElement = document.querySelector('#drawer');

const aboutImageElement = document.querySelector('.about-image');
aboutImageElement.setAttribute('src', aboutImage);

hamburgerButtonElement.addEventListener('click', event => {
    drawerElement.classList.toggle('open');
    event.stopPropagation();
});

drawerElement.addEventListener('click', event => {
  drawerElement.classList.remove('open');
  event.stopPropagation();
});


const makeMenuElements = (restaurants) => {
    let elements = '';

    restaurants.forEach(restaurant =>{
        elements += `
        <div class="card-item">
            <img tabindex="0" src="${restaurant.pictureId}" alt="gambar-restaurant ${restaurant.name}">
            <div class="information-item">
                <p tabindex="0" class="nama">Nama: ${restaurant.name} </p>
                <p tabindex="0" class="kota">Kota: ${restaurant.city}</p>
                <p tabindex="0" class="rating">Rating: ${restaurant.rating} </p>
                <p tabindex="0" class="deskripsi">Deskripsi: ${restaurant.description}</p>
            </div>
        </div>
        `;
    });
    return elements;

}

listRestaurantsElement.innerHTML = makeMenuElements(data.restaurants);
