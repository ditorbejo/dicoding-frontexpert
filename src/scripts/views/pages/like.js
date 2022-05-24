import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemElements } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div tabindex="0" id="content-favorite" class="content-favorite">
        <h2 tabindex="0" class="content__heading">Your Favorite Restaurant</h2>
        <div tabindex="0" id="movies" class="list-restaurant-favorite"></div>
    </div>
    
    <div class="empty-favorite-restaurant">
    
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    console.log(restaurants);
    const listRestaurantsFavoriteContainer = document.querySelector(
      '.list-restaurant-favorite',
    );
    if (restaurants.length === 0) {
      const emptyContainer = document.querySelector('.empty-favorite-restaurant');
      emptyContainer.innerHTML = `
      <div class="alert-empty">
      Empty Favorite Restaurant
      </div>
      <div class="loading-empty">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <rect x="19" y="19" width="20" height="20" fill="#2f2926">
          <animate attributeName="fill" values="#603417;#2f2926;#2f2926" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0s" calcMode="discrete"></animate>
        </rect><rect x="40" y="19" width="20" height="20" fill="#2f2926">
          <animate attributeName="fill" values="#603417;#2f2926;#2f2926" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.125s" calcMode="discrete"></animate>
        </rect><rect x="61" y="19" width="20" height="20" fill="#2f2926">
          <animate attributeName="fill" values="#603417;#2f2926;#2f2926" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.25s" calcMode="discrete"></animate>
        </rect><rect x="19" y="40" width="20" height="20" fill="#2f2926">
          <animate attributeName="fill" values="#603417;#2f2926;#2f2926" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.875s" calcMode="discrete"></animate>
        </rect><rect x="61" y="40" width="20" height="20" fill="#2f2926">
          <animate attributeName="fill" values="#603417;#2f2926;#2f2926" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.375s" calcMode="discrete"></animate>
        </rect><rect x="19" y="61" width="20" height="20" fill="#2f2926">
          <animate attributeName="fill" values="#603417;#2f2926;#2f2926" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.75s" calcMode="discrete"></animate>
        </rect><rect x="40" y="61" width="20" height="20" fill="#2f2926">
          <animate attributeName="fill" values="#603417;#2f2926;#2f2926" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.625s" calcMode="discrete"></animate>
        </rect><rect x="61" y="61" width="20" height="20" fill="#2f2926">
          <animate attributeName="fill" values="#603417;#2f2926;#2f2926" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.5s" calcMode="discrete"></animate>
        </rect>
        </svg>
      </div>
      <a href="#/">Back to Home</a>
      `;
    } else {
      listRestaurantsFavoriteContainer.innerHTML += createRestaurantItemElements(restaurants);
    }
  },

};

export default Like;
