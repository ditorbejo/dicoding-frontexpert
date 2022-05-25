/* eslint-disable no-undef */
Feature('Unliking Restaurants');

Scenario('Unliking one restaurant', ({ I }) => {
    I.amOnPage('/');
    I.seeElement('.card-item .nama-restaurant a');

    const firstRestaurant = locate('.card-item .nama-restaurant a').first();
    I.click(firstRestaurant);

    I.seeElement('#likeButton');

    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.card-item .nama-restaurant a');
    const likedRestaurantName = locate('.card-item .nama-restaurant a').first();
    I.click(likedRestaurantName);
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.see('Empty Favorite Restaurant', '.alert-empty');
});