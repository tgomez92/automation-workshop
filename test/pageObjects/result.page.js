class ResultPage {

    get firstResultRestaurant ()    { return $$('h3') [0]};
    get inputDescription ()         { return $('#search_description')};
    get searchBtnModalScreen ()     { return $('[value=submit]')};
    get categoryBtn ()              { return $$('[role=button]')[0]};
    get searchModalBtn ()           { return $$('[value=submit]')[4]};
    get firstAllRestaurants ()      { return $$('h3')[2]};
    get glutenFreeCategory ()       { return $$('[data-font-weight=semibold]')[10]};

    async accessFirstRestaurant(){
        await this.firstResultRestaurant.waitForClick();
    }

    async searchDescription(description){
        await this.inputDescription.setValue(description);
        await this.searchBtnModalScreen.waitForClick();
    }

    async accessToCategory(){
        await this.categoryBtn.waitForClick();
    }

    async selectGlutenFreeCheckBox(){
        const glutenFreeCheckBox = await $('[value=gluten_free]');
        await glutenFreeCheckBox.scrollIntoView(true);
        await glutenFreeCheckBox.waitForClick();
        await searchModalBtn.waitForClick();
    }

    async getRestaurantCategory(){
        await this.firstAllRestaurants.waitForClick();
        let categories = await glutenFreeCategory.getText();
    }
}
export default new ResultPage();