import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async listRestaurants() {
      const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
      return response.json();
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async searchRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    const responseJson = response.json();
    return responseJson;
  }
}

export default RestaurantDbSource;
