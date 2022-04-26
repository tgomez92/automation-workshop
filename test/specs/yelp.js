const { config } = require("../../wdio.conf");
const location = 'Miami';
const state = 'Closed';
const description = 'Restaurants';
const category = 'Gluten-Free';
import HomePage from '../pageObjects/home.page';
import ResultPage from '../pageObjects/result.page';

describe('Yelp tests',() => {

    before(async() => {
        await browser.maximizeWindow();
        await browser.url(config.baseUrl);
    })

    /*it('Enter an address and verify if the first restaurant is close', async () => {

        await HomePage.searchLocation(location);
        
        await ResultPage.accessFirstRestaurant();

        const restaurantState = await $$('[data-font-weight=semibold]')[13];
        let actualState = await restaurantState.getText();
        
        await expect(actualState).toEqual(state);
    });*/

    it('Verify that in the section gluten free, all the restaurants have the gluten free tag', async () => {

        await HomePage.searchLocation(location);
        await ResultPage.searchDescription(description);

        //await categoryBtn.waitForClick();
        await ResultPage.accessToCategory();

        //const glutenFreeCheckBox = await $('[value=gluten_free]');
        //await glutenFreeCheckBox.scrollIntoView(true);
        //await glutenFreeCheckBox.waitForClick();
        //await searchModalBtn.waitForClick();
        await ResultPage.selectGlutenFreeCheckBox();

        //await firstAllRestaurants.waitForClick();
        //let categories = await glutenFreeCategory.getText();

        await ResultPage.getRestaurantCategory();
        await expect(categories).toEqual(category);
    });

});