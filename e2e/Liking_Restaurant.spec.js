const assert = require('assert');
/* eslint-disable no-undef */
Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
  });

Scenario('showing empty liked Restaurants', ({ I }) => {
  I.seeElement('.alert-empty');
  I.see('Empty Favorite Restaurant', '.alert-empty');
});

Scenario('liking one restaurant', async ({ I }) => {
    I.see('Empty Favorite Restaurant', '.alert-empty');

    I.amOnPage('/');
    I.seeElement('.card-item .nama-restaurant a');

    const firstRestaurant = locate('.card-item .nama-restaurant a').first();
    const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');

    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.card-item .nama-restaurant a');
    const likedRestaurantName = await I.grabTextFrom('.card-item .nama-restaurant a');

assert.strictEqual(firstRestaurantName, likedRestaurantName);
});