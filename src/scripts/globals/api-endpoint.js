import CONFIG from './config';

const API_ENDPOINT = {
  LIST_RESTAURANT: `${CONFIG.BASE_URL}list`,
  DETAIL: id => `${CONFIG.BASE_URL}detail/${id}`,
  POST_REVIEW: `${CONFIG.BASE_URL}review`,
  SEARCH_RESTAURANT: `${CONFIG.BASE_URL}search?q=`,
};

export default API_ENDPOINT;
