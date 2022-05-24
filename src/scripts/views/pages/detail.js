/* eslint-disable eqeqeq */
import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import {
  createRestaurantDetailElements,
  create404RestaurantNotFoundElement,

} from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import API_ENDPOINT from '../../globals/api-endpoint';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';

const Detail = {
  async render() {
    return `
    <div id="selected-restaurant-item" class="selected-restaurant"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailRestaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const restaurantSelectContainer = document.querySelector(
      '.selected-restaurant',
    );

    if (detailRestaurant.error == true) {
      restaurantSelectContainer.innerHTML = create404RestaurantNotFoundElement(
        detailRestaurant.message,
      );
    } else {
      restaurantSelectContainer.innerHTML = createRestaurantDetailElements(
        detailRestaurant.restaurant,
      );
    }

    const formReview = document.querySelector('#form-review');
    formReview.addEventListener('submit', e => {
      e.preventDefault();

      const name = document.querySelector('#name').value;
      const review = document.querySelector('#review').value;

       fetch(`${API_ENDPOINT.POST_REVIEW}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: detailRestaurant.restaurant.id,
          name,
          review,
        }),
      });
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#favorite-button-container'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: detailRestaurant.restaurant.id,
        name: detailRestaurant.restaurant.name,
        pictureId: detailRestaurant.restaurant.pictureId,
        city: detailRestaurant.restaurant.city,
        rating: detailRestaurant.restaurant.rating,
        description: detailRestaurant.restaurant.description,
      },
    });
  },
};

export default Detail;
