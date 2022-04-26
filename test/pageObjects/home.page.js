class HomePage {

    get searchInput()   { return $('#dropperText_Mast')};
    get searchBtn()     { return $('#header-search-submit')};

    async searchLocation(location){
        await this.searchInput.setValue(location);
        await this.searchBtn.waitForClick();
    }

}
export default new HomePage();