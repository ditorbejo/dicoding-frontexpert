import hero from '../../../public/images/heros/hero-image_2.jpg';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemElements } from '../templates/template-creator';
import aboutImage from '../../../public/images/assets/ditor.jpg';
import bandungImages from '../../../public/images/assets/bandung.jpg';
import surabayaImages from '../../../public/images/assets/surabaya.jpg';

const ListRestaurant = {
  async render() {
    return `
    <section class="hero-image">
        <div id="hero" class="hero-content">
          <h2 tabindex="0">Welcome to <span class="kenyang-apps-hero">Kenyang Apps</span> </h2>
          <p tabindex="0">
            Kenyang apps siap merekomendasikan makanan nikmat untukmu
          </p>
        </div>
      </section>
    <section tabindex="0" id="location" class="locations-restaurant">
        <h2 tabindex="0">Locations</h2>
        <div class="list-location-restaurant">
          <div tabindex="0" class="location-card malang">
            <img class="location-image malang" src="${surabayaImages}" alt="lokasi-malang" />
            <p class="lokasi-malang">Surabaya</p>
          </div>
          <div tabindex="0" class="location-card bali">
            <img class="location-image bali" src="${bandungImages}" alt="lokasi-bali" />
            <p class= "lokasi-bali">Bandung</p>
          </div>
        </div>
      </section>
      <section id=list-location class="list-locations-container-restaurant">
      <div class="list-result-location-restaurant"></div>
      </section>
      <section id="contentmenu" class="content-menu">
        <h2 tabindex="0">Recommended Restaurant</h2>
        <div class="list-restaurant-items"></div>
      </section>
      <section id="about" class="about-us">
        <h2 tabindex="0">About Us</h2>
        <img
          tabindex="0"
          class="about-image"
          src="${aboutImage}"
          alt="gambar-pembuat-website"
        />
        <p tabindex="0">
          Hai Saya Dimas Toriq Pratama Putra, Saya adalah mahasiswa Universitas
          brawijaya Malang Saya Belajar membuat website dan ingin menjadi Web
          developer sesudah saya lulus kuliah. Website ini bertemakan
          restaurant.
        </p>
        <p tabindex="0">Follow my social Media</p>
        <div class="logo-social-media">
          <a
            aria-label="linkedin saya"
            tabindex="0"
            href="https://www.linkedin.com/in/ditorbejo/ "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M1 2.838A1.838 1.838 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.838 1.838 0 0 1 21.161 23H2.838A1.838 1.838 0 0 1 1 21.161V2.838Zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708V9.388Zm-5.5 10.403h3.208V9.25H4.208v10.54ZM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a
            aria-label="instagram saya"
            tabindex="0"
            href="https://www.instagram.com/ditorbejo/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216a4.61 4.61 0 0 0-2.633-2.633a6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42a4.607 4.607 0 0 0-2.633 2.633a6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632a6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419a4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187c.043-.962.056-1.267.056-3.71c-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078a1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"
              />
              <circle cx="11.994" cy="11.979" r="3.003" fill="currentColor" />
            </svg>
          </a>
        </div>
      </section>
    </main>
    `;
  },

  async afterRender() {
    const heroImage = document.querySelector('.hero-image');
    heroImage.style.backgroundImage = `url(${hero})`;
    const restaurantSource = await RestaurantDbSource.listRestaurants();
    const { restaurants } = restaurantSource;

    const listRestaurantsContainer = document.querySelector(
      '.list-restaurant-items',
    );
    listRestaurantsContainer.innerHTML = createRestaurantItemElements(restaurants);

    const categoryLocationSurabaya = document.querySelector('.location-card.malang');
    const categoryLocationBandung = document.querySelector('.location-card.bali');

    categoryLocationSurabaya.addEventListener('click', async e => {
      e.preventDefault();
      const lokasi = document.querySelector('.lokasi-malang');
      const category = lokasi.innerText;
      const result = await RestaurantDbSource.searchRestaurant();
      const resultRestaurants = result.restaurants;
      const filteredLocationRestaurant = resultRestaurants.filter(restaurant => (restaurant.city.toLowerCase().includes(category.toLowerCase())
          ? restaurant
          : null));

      const listLocationRestaurantsContainer = document.querySelector(
        '.list-result-location-restaurant',
      );
      listLocationRestaurantsContainer.innerHTML = createRestaurantItemElements(
        filteredLocationRestaurant,
      );
    });

    categoryLocationBandung.addEventListener('click', async e => {
      e.preventDefault();
      const lokasi = document.querySelector('.lokasi-bali');
      const category = lokasi.innerText;
      const result = await RestaurantDbSource.searchRestaurant();
      const resultRestaurants = result.restaurants;
      const filteredLocationRestaurant = resultRestaurants.filter(restaurant => (restaurant.city.toLowerCase() === category.toLowerCase()
          ? restaurant
          : null));

      const listLocationRestaurantsContainer = document.querySelector(
        '.list-result-location-restaurant',
      );
      listLocationRestaurantsContainer.innerHTML = createRestaurantItemElements(
        filteredLocationRestaurant,
      );
    });
  },
};

export default ListRestaurant;
