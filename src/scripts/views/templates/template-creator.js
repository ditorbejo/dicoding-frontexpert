/* eslint-disable no-tabs */
/* eslint-disable arrow-spacing */
/* eslint-disable no-unused-expressions */
import CONFIG from '../../globals/config';

const reduceText = (text, count) => {
  const result = text.slice(0, count) + (text.length > count ? '...' : '');

  return result;
};

const createRestaurantItemElements = restaurants => {
  let elements = '';
  restaurants.forEach(restaurant => {
    elements += `
        <div class="card-item">
        <picture>
            <source type="image/webp" srcset="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
            <source type="image/jpeg" srcset="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
            <img tabindex="0" aria-label="${
              restaurant.name
            }" loading="lazy" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="gambar-restaurant ${restaurant.name}">
            </picture>
            <div class="information-item">
                <p tabindex="0" class="nama-restaurant"><a href="${`/#/detail/${restaurant.id}`}">${
      restaurant.name
    }</a></p>
                <p tabindex="0" aria-label="kota ${restaurant.city}"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#d22f27" d="M15 11V5l-3-3l-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg> ${
                  restaurant.city
                }</p>
                
                <p tabindex="0" class="rating" aria-label="rating ${restaurant.rating}">⭐️${
                  restaurant.rating
                } </p>
                <p tabindex="0" class="deskripsi">${reduceText(
                  restaurant.description,
                  200,
                )} </p>
            </div>
        </div>
        `;
  });
  return elements;
};

const createRestaurantDetailElements = restaurant => `
    <h2 tabindex="0" id="content-detail">Detail Restaurant</h2>
    <div  class="restaurant-card">
        <h3 tabindex="0" >${restaurant.name}</h3>
        <div class="restaurant-information">
            <picture>
            <source type="image/webp" srcset="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
            <source type="image/jpeg" srcset="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
            <img tabindex="0" aria-label="${
              restaurant.name
            }" loading="lazy" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="gambar-restaurant ${restaurant.name}">
            </picture>
            <div class="restaurant-detail-information">
                <div class="restaurant-detail-information-location">
                    <p tabindex="0"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 74 74"><path fill="#d22f27" d="M52.573 29.11c0-9.315-7.133-16.892-15.903-16.892s-15.904 7.577-15.904 16.896c.003.465.224 11.609 12.962 31.245a3.463 3.463 0 0 0 2.817 1.934c1.84 0 3.094-2.026 3.216-2.232C52.58 40.413 52.58 29.553 52.573 29.11ZM36.67 35.913a7.083 7.083 0 1 1 7.083-7.082a7.09 7.09 0 0 1-7.083 7.082Z"/><path fill="#ea5a47" d="M52.573 29.11c0-9.315-7.133-16.892-15.903-16.892a14.96 14.96 0 0 0-3.865.525c8.395.45 15.1 7.823 15.1 16.85c.006.443.006 11.303-12.813 30.95a5.854 5.854 0 0 1-.586.797a2.855 2.855 0 0 0 2.04.954c1.839 0 3.093-2.027 3.215-2.233C52.58 40.413 52.58 29.553 52.573 29.11Z"/><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M36.545 62.294a3.463 3.463 0 0 1-2.817-1.935C20.99 40.723 20.769 29.58 20.766 29.114c0-9.32 7.134-16.896 15.904-16.896s15.903 7.577 15.903 16.892c.007.444.007 11.304-12.812 30.95c-.122.207-1.377 2.233-3.216 2.233Z"/><path d="M36.67 35.913a7.083 7.083 0 1 1 7.083-7.082a7.09 7.09 0 0 1-7.083 7.082Z"/></g></svg> ${
                      restaurant.address
                    }</p>
                    <p tabindex="0"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#d22f27" d="M15 11V5l-3-3l-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg> ${
                      restaurant.city
                    }</p>
                    <p tabindex="0">⭐️<span class="rating-score"> ${
                      restaurant.rating
                    }</span></p>
                </div>
                <div  id="favorite-button-container" class="restaurant-detail-favorite"></div>
            </div>
        </div>
        <div class="restaurant-description">
            <h4>Deskripsi Restaurant ${restaurant.name}</h4>
            <p>${reduceText(restaurant.description, 300)}</p>
        </div>
        <div class="restaurant-menu-card">
            <h4 tabindex="0">Menu Restaurant ${restaurant.name}</h4>
            <div class="restaurant-menu">
                <div class="menu-makanan-item">
                    <h5 tabindex="0">Foods</h5>
                    <div class="list-menu-makanan" tabindex="0">
                    ${restaurant.menus.foods
                      .map(food => `<p tabindex="0">${food.name}</p>`)
                      .join('')}
                    </div>
                </div>
                <div class="menu-minuman-item">
                    <h5 tabindex="0">Drinks</h5>
                    <div class="list-menu-minuman" tabindex="0">
                    ${restaurant.menus.drinks
                      .map(drink => `<p tabindex="0">${drink.name}</p>`)
                      .join('')}
                    </div>
                </div>
            </div>
        </div>
        <div class="review-card">
            <h4 tabindex="0" >Post Reviews</h4>
            <div class="review-input">
                <form id="form-review">
                    <input type="text" name="name" id="name" placeholder="Name">
                    <input type="text" name="review" id="review" placeholder="Type review here..">
                    <button type="submit" id="submit-review">Submit</button>
                </form>
            </div>
        </div>
        <div class="hasil-review">
            <h4>Reviews</h4>
            <div class="list-review">
            ${restaurant.customerReviews
              .map(
                review => `
                <div class="review-card">
                    <div class="review-information">
                        <p class="review-name">${review.name}</p>
                        <p>${review.date}</p>
                    </div>
                    <div class="review-text-container">
                        <p class="review-text">${review.review}</p>
                    </div>
                </div>
                `,
              )
              .join('')}
            </div>
        </div>
    </div>
    `;

  const createLikeButtonElement = () => `
  <button tabindex="0" aria-label="like this restaurant" id="likeButton" class="button-favorite">
      <svg click="like" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="44" height="44" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="white" stroke="black" fill-opacity="0.5" stroke-opacity="0.8" d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z"/></svg>
  </button>
  `;

  const createUnlikeButtonElement = () => `
  <button tabindex="0" aria-label="unlike this restaurant" id="likeButton" class="button-favorite-unlike">
      <svg class="click-like"xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="44" height="44" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="red" stroke="black" fill-opacity="0.5" stroke-opacity="0.8" d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z"/></svg>
  </button>
  `;

 const createLoadingElement = `
 <div class="loading">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        style="margin: auto; display: block; shape-rendering: auto;"
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <rect x="19" y="19" width="20" height="20" fill="#2f2926">
          <animate
            attributeName="fill"
            values="#603417;#2f2926;#2f2926"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0s"
            calcMode="discrete"
          ></animate>
        </rect>
        <rect x="40" y="19" width="20" height="20" fill="#2f2926">
          <animate
            attributeName="fill"
            values="#603417;#2f2926;#2f2926"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.125s"
            calcMode="discrete"
          ></animate>
        </rect>
        <rect x="61" y="19" width="20" height="20" fill="#2f2926">
          <animate
            attributeName="fill"
            values="#603417;#2f2926;#2f2926"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.25s"
            calcMode="discrete"
          ></animate>
        </rect>
        <rect x="19" y="40" width="20" height="20" fill="#2f2926">
          <animate
            attributeName="fill"
            values="#603417;#2f2926;#2f2926"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.875s"
            calcMode="discrete"
          ></animate>
        </rect>
        <rect x="61" y="40" width="20" height="20" fill="#2f2926">
          <animate
            attributeName="fill"
            values="#603417;#2f2926;#2f2926"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.375s"
            calcMode="discrete"
          ></animate>
        </rect>
        <rect x="19" y="61" width="20" height="20" fill="#2f2926">
          <animate
            attributeName="fill"
            values="#603417;#2f2926;#2f2926"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.75s"
            calcMode="discrete"
          ></animate>
        </rect>
        <rect x="40" y="61" width="20" height="20" fill="#2f2926">
          <animate
            attributeName="fill"
            values="#603417;#2f2926;#2f2926"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.625s"
            calcMode="discrete"
          ></animate>
        </rect>
        <rect x="61" y="61" width="20" height="20" fill="#2f2926">
          <animate
            attributeName="fill"
            values="#603417;#2f2926;#2f2926"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.5s"
            calcMode="discrete"
          ></animate>
        </rect>
      </svg>
    </div>
 `;

  const create404RestaurantNotFoundElement = message => `
      <svg version="1.1" id="error-404-img" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
        y="0px" viewBox="0 0 344.7 276.7" style="enable-background:new 0 0 344.7 276.7;" xml:space="preserve">
      <style type="text/css">
        .st0{fill:#4C423B;}
        .st1{opacity:0.2;}
        .st2{fill:#FFFFFF;}
        .st3{fill:rgba(132, 121, 114, .4);}
        .st4{fill:#424242;}
        .st5{fill:#E0E0E0;}
        .st6{fill:#BDBDBD;}
        .st7{opacity:0.64;fill:#212121;}
        .st8{fill:#F5F5F5;}
        .st9{opacity:0.8;fill:#4C423B;}
      </style>
      <g id="decorations">
        <polygon class="st0" points="245,52.8 241.7,49.5 238.5,52.6 235.4,49.5 232.1,52.8 235.2,55.9 232.1,59.1 235.4,62.4 238.5,59.2
          241.7,62.4 245,59.1 241.8,55.9 	"/>
        <polygon class="st0" points="42.7,172 39.4,168.7 36.2,171.8 33.1,168.7 29.8,172 32.9,175.1 29.8,178.3 33.1,181.6 36.2,178.4
          39.4,181.6 42.7,178.3 39.5,175.1 	"/>
        <polygon class="st0" points="102.9,30.8 99.6,27.5 96.4,30.7 93.3,27.5 90,30.8 93.1,34 90,37.2 93.3,40.5 96.4,37.3 99.6,40.5
          102.9,37.2 99.8,34 	"/>
        <polygon class="st0" points="311,196.3 307.7,192.9 304.5,196.1 301.4,192.9 298.1,196.3 301.2,199.4 298.1,202.6 301.4,205.9
          304.5,202.7 307.7,205.9 311,202.6 307.9,199.4 	"/>
        <g>
          <path class="st0" d="M42.7,67.2c-2.7,0-4.8-2.2-4.8-4.8c0-2.7,2.2-4.8,4.8-4.8c2.7,0,4.8,2.2,4.8,4.8
            C47.5,65.1,45.4,67.2,42.7,67.2z M42.7,59.6c-1.6,0-2.8,1.3-2.8,2.8s1.3,2.8,2.8,2.8s2.8-1.3,2.8-2.8S44.3,59.6,42.7,59.6z"/>
        </g>
        <g>
          <path class="st0" d="M183.1,23.3c-2.7,0-4.8-2.2-4.8-4.8s2.2-4.8,4.8-4.8c2.7,0,4.8,2.2,4.8,4.8S185.8,23.3,183.1,23.3z
            M183.1,15.7c-1.6,0-2.8,1.3-2.8,2.8s1.3,2.8,2.8,2.8s2.8-1.3,2.8-2.8S184.7,15.7,183.1,15.7z"/>
        </g>
        <g>
          <path class="st0" d="M318.6,91c-2.7,0-4.8-2.2-4.8-4.8c0-2.7,2.2-4.8,4.8-4.8c2.7,0,4.8,2.2,4.8,4.8C323.5,88.9,321.3,91,318.6,91
            z M318.6,83.4c-1.6,0-2.8,1.3-2.8,2.8s1.3,2.8,2.8,2.8s2.8-1.3,2.8-2.8S320.2,83.4,318.6,83.4z"/>
        </g>
        <g>
          <path class="st0" d="M257,170.8c-2.7,0-4.8-2.2-4.8-4.8c0-2.7,2.2-4.8,4.8-4.8c2.7,0,4.8,2.2,4.8,4.8
            C261.8,168.7,259.6,170.8,257,170.8z M257,163.2c-1.6,0-2.8,1.3-2.8,2.8s1.3,2.8,2.8,2.8s2.8-1.3,2.8-2.8S258.5,163.2,257,163.2z"
            />
        </g>
        <g>
          <path class="st0" d="M90,232c-2.7,0-4.8-2.2-4.8-4.8c0-2.7,2.2-4.8,4.8-4.8c2.7,0,4.8,2.2,4.8,4.8C94.8,229.8,92.6,232,90,232z
            M90,224.3c-1.6,0-2.8,1.3-2.8,2.8s1.3,2.8,2.8,2.8s2.8-1.3,2.8-2.8S91.5,224.3,90,224.3z"/>
        </g>
        <circle class="st0" cx="98.9" cy="65.3" r="9"/>
        <circle class="st0" cx="103.3" cy="168.8" r="4.5"/>
        <path class="st0" d="M332.5,154.2c0,2.5-2,4.5-4.5,4.5s-4.5-2-4.5-4.5c0-2.5,2-4.5,4.5-4.5S332.5,151.8,332.5,154.2z"/>
        <path class="st0" d="M17.3,96.3c0,2.5-2,4.5-4.5,4.5c-2.5,0-4.5-2-4.5-4.5s2-4.5,4.5-4.5C15.3,91.8,17.3,93.9,17.3,96.3z"/>
        <path class="st0" d="M243.1,96.3c0,2.5-2,4.5-4.5,4.5c-2.5,0-4.5-2-4.5-4.5s2-4.5,4.5-4.5C241,91.8,243.1,93.9,243.1,96.3z"/>
        <circle class="st0" cx="229.1" cy="222.3" r="6.8"/>
      </g>
      <g id="_x34_-gauche">
        <g class="st1">
          <path class="st0" d="M60.6,168.4v-21.1H19.3v-16.8l47.4-60.8h12.9v60.7H92v17H79.5v21.1H60.6z M38.2,130.3h24.5v-32L38.2,130.3z"
            />
        </g>
        <g>
          <path class="st2" d="M58.6,166.4v-21.1H17.3v-16.8l47.4-60.8h12.9v60.7H90v17H77.5v21.1H58.6z M36.2,128.3h24.5v-32L36.2,128.3z"
            />
        </g>
      </g>
      <path id="ombre-loupe" class="st3" d="M238.6,173l0.4-0.3c0.6-0.5,0.6-1.4,0.1-1.9l-7.6-8.3c7.8-9.8,12.7-22.1,13.3-35.6
        c1.5-34.1-24.9-62.9-58.9-64.4c-34.1-1.5-62.9,24.9-64.4,58.9c-1.5,34.1,24.9,62.9,58.9,64.4c13.5,0.6,26.2-3.2,36.7-10.1l7.6,8.3
        c0.5,0.6,1.4,0.6,1.9,0.1l0.4-0.3l56.2,61.4h21.4L238.6,173z"/>
      <g id="_x34_-droite">
        <g class="st1">
          <path class="st0" d="M281.3,168.4v-21.1H240v-16.8l47.4-60.8h12.9v60.7h12.4v17h-12.4v21.1H281.3z M259,130.3h24.5v-32L259,130.3z
            "/>
        </g>
        <g>
          <path class="st2" d="M279.3,166.4v-21.1H238v-16.8l47.4-60.8h12.9v60.7h12.4v17h-12.4v21.1H279.3z M257,128.3h24.5v-32L257,128.3z
            "/>
        </g>
      </g>

      <g id="loupe">
        <path class="st4" d="M311.4,252.6L219.8,161L208,172.8l91.6,91.6c3.4,3.4,9.1,3.2,12.2-0.5h0C314.6,260.5,314.4,255.6,311.4,252.6z
          "/>
        <path class="st5" d="M199.5,167.1l11.1,11.1c0.6,0.6,1.5,0.6,2,0l12.5-12.5c0.6-0.6,0.6-1.5,0-2l-11.1-11.1L199.5,167.1z"/>
        <polygon class="st6" points="215.8,154.2 217.2,155.7 205.4,173 200.2,167.8 	"/>
        <polygon class="st7" points="213,177.8 224.8,166 225.6,166.8 216.4,181.1 	"/>
        <path class="st8" d="M164,51.9c-36,0-65.1,29.2-65.1,65.1s29.2,65.1,65.1,65.1s65.1-29.2,65.1-65.1S200,51.9,164,51.9z M164,168.7
          c-28.5,0-51.7-23.1-51.7-51.7c0-28.5,23.1-51.7,51.7-51.7s51.7,23.1,51.7,51.7C215.7,145.5,192.5,168.7,164,168.7z"/>
        <circle class="st9" cx="164" cy="117" r="51.7"/>
        <path class="st2" d="M129.7,82.7c-7.5,7.5-12,15.1-10,17c1.9,1.9,9.6-2.6,17-10c7.5-7.5,12-15.1,10-17
          C144.8,70.7,137.2,75.2,129.7,82.7z"/>
      </g>
      </svg>
      <div class="alert alert-danger" role="alert">
      ${message}
      </div>
      `;

export {
  reduceText,
  createRestaurantItemElements,
  createRestaurantDetailElements,
  createLikeButtonElement,
  createUnlikeButtonElement,
  createLoadingElement,
  create404RestaurantNotFoundElement,
};
