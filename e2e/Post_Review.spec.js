const assert = require('assert');
/* eslint-disable no-undef */
Feature('Review First Restaurant');

Scenario('review a restaurant', async ({ I }) => {
    I.amOnPage('/');
    I.seeElement('.card-item .nama-restaurant a');
    const firstRestaurant = locate('.card-item .nama-restaurant a').first();
    I.click(firstRestaurant);

    I.seeElement('.review-input form input#name');
    I.seeElement('.review-input form input#review');
    I.seeElement('button#submit-review');

    I.fillField('.review-input form input#name', 'budi');
    I.fillField('.review-input form input#review', 'ini review budi');

    I.click('button#submit-review');
    I.refreshPage();

    I.seeElement('.list-review');

    const reviewName = await I.grabTextFrom(locate('.review-name').last());
    const postReview = await I.grabTextFrom(locate('.review-text').last());

    assert.strictEqual('budi', reviewName);
    assert.strictEqual('ini review budi', postReview);
});
