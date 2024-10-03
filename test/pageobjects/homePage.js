import objects from "../properties/homePage.json" with {type: "json"}
import customerOutcome from "../properties/customerOutcome.json" with {type: "json"}
import utils from "../utilities/util.js"


class homePage{

    /**
     * locators of the home page
     */
    get newPlan(){
        return $(objects.newPlan)
    }
    get createCustomPlan(){
        return $(objects.createCustomPlan)
    }
    get collectionTest(){
        return $(objects.collectionTest)
    }
    get cancelPlan(){
        return $(objects.cancelPlan)
    }
    get creditCardButton(){
        return $(objects.creditCard)
    }
    get homePageLogo() {return $(objects.wfsLogoHomePage)}
    get loggedInUserProfileIcon() {return $(objects.loggedInProfileIcon)}
    get loggedInUserName() {return $(objects.loggedInUserName)}
    get loggedInAgentName() {return $(objects.loggedInAgentName)}
    get searchBar() {return $(objects.searchBar)}
    get searchIcon() {return $(objects.searchIcon)}
    get searchTextBox() {return $(objects.searchTextBox)}
    get searchButton() {return $(objects.searchButton)}
    get customerStatusText() {return $(objects.customerStatusText)}
    get creditcardMenu() {return $(objects.creditcardMenu)}
    get creditCardIcon() {return $(objects.creditCardIcon)}
    get storeCardMenu() {return $(objects.storeCardMenu)}
    get storeCardIcon() {return $(objects.storeCardIcon)}
    get personalLoanMenu() {return $(objects.personalLoanMenu)}
    get personalLoanIcon() {return $(objects.personalLoanIcon)}
    get findaPlanText() {return $(objects.findaPlanText)}
    get step1Text() {return $(objects.step1Text)}
    get describeYourSituationText() {return $(objects.describeYourSituationText)}
    get selectAnOptionDropdown() {return $(objects.selectAnOptionDropdown)}
    get customerName() {return $(objects.customerName)}
    get productSection() {return $(objects.productSection)}
    get productIconSection() {return $(objects.productIconSection)}
    get productSectionText() {return $(objects.productSectionText)}
    get productStatus() {return $(objects.productStatus)}
    get productSectionAccordion() {return $(objects.productSectionAccordion)}
    get clearButton() {return $(objects.clearButton)}
    get step2Text() {return $(objects.step2Text)}
    get step2SelectAnOption() {return $(objects.step2SelectAnOption)}
    get step2SelectDropdownValue() {return $(objects.step2SelectDropdownValue)}
    get step2SelectDropdown() {return $(objects.step2SelectDropdown)}
    get viewPlansButton() {return $(objects.viewPlanButton)}
   // get customerOutcomeText() {return $(objects.customerOutcomeText)}
    get customerNotInterestedIcon() {return $(objects.customerNotInterestedIcon)}
    get customerNotInterestedMenuText() {return $(objects.customerNotInterestedMenuText)}
    get cannotAffordAPlanMenuText() {return $(objects.cannotAffordAPlanMenuText)}
    get cannotAffordAPlanIcon() {return $(objects.cannotAffordAPlanIcon)}
    get notRightNowICon() {return $(objects.notRightNowICon)}
    get notRightNowText() {return $(objects.notRightNowText)}
    get customerNotInterestedText() {return $(customerOutcome.customerNotInterestedText)}
    get crossIcon() {return $(customerOutcome.crossIcon)}
    get crossImage() {return $(customerOutcome.crossImage)}
    get customerIsNotInterestedLabelText() {return $(customerOutcome.customerIsNotInterestedLabelText)}
    get closeApplicationButton() {return $(customerOutcome.closeApplicationButton)}
    get cannotAffordPlanText() {return $(customerOutcome.cannotAffordPlanText)}
    get closeIcon() {return $(customerOutcome.closeIcon)}
    get cannotAffordPlanImageIcon() {return $(customerOutcome.cannotAffordPlanImageIcon)}
    get customercannotaffordPlanLabelText() {return $(customerOutcome.customercannotaffordPlanLabelText)}
    get cannotAffordCloseApplicationButton() {return $(customerOutcome.cannotAffordCloseApplicationButton)}
    get notRightNowText() {return $(customerOutcome.notRightNowText)}
    get notRightNowIcon() {return $(customerOutcome.notRightNowIcon)}
    get notRightNowLabelText() {return $(customerOutcome.notRightNowLabelText)}
    get customerNotInterestedRightNowText() {return $(customerOutcome.customerNotInterestedRightNowText)}
    get notRightNowCloseIcon() {return $(customerOutcome.notRightNowCloseIcon)}
    get customerOutcomeText() {return $(customerOutcome.customerOutcomeText)}

    /**
     * Home page function
     */

    async isNewPlan(){
        await utils.waitForElement(this.newPlan)
        let element = await utils.isElementDisplayed(this.newPlan)
        return element
    }

    async clickNewPlan(){
        await utils.clickElement(this.newPlan)
    }

    async isCreateCustomPlan(){
        await utils.waitForElement(this.createCustomPlan)
        let element = await utils.isElementDisplayed(this.createCustomPlan)
        return element
    }

    async clickCreateCustomPlan(){
        await utils.clickElement(this.createCustomPlan)
        await browser.pause(6000)
    }

    async isCollectionTestDisplayed(){
        let element = await utils.isCollectionTestDisplayed(this.collectionTest)
        return element
    }
     
    async clickcollectionTest(){
        await utils.clickElement(this.collectionTest)
    }

    async clickCancelPlan(){
        await browser.pause(1000)
        await utils.clickElement(this.cancelPlan)
    }

    async isCancelPlan(){
        await utils.waitForElement(this.cancelPlan)
        let element = await utils.isElementDisplayed(this.cancelPlan)
        return element
    }

    async getCancelPlan(){
        let elementText = await utils.getAttributeValue(this.cancelPlan)
        return elementText
    }

    /**
     * Function is to check if the logo is displayed in the home page and 
     * @returns true if it is displayed
     */
    async isHomePageLogoDisplayed(){
        await utils.waitForElement(this.homePageLogo)
        let element = await utils.isElementDisplayed(this.homePageLogo)
        return element
    }

    /**
     * Function checks if the logged in user profile icon is displayed and
     * @returns true if it is displayed
     */
    async isLoggedInUserProfileIconDisplayed(){
        await utils.waitForElement(this.loggedInUserProfileIcon)
        let element = await utils.isElementDisplayed(this.loggedInUserProfileIcon)
        return element

    }

    async clickLoggedInUserProfileIcon(){
        await utils.clickElement(this.loggedInUserProfileIcon)
    }

    /**
     * Function checks if the logged in user name is displayed in the home page and
     * @returns true if the element is displayed
     */
    async isLoggedInUserNameDisplayed(){
        await utils.waitForElement(this.loggedInUserName)
        let element = await utils.isElementDisplayed(this.loggedInUserName)
        return element
    }

    /**
     * Function is to get the text of the logged in user name
     * @returns the element text
     */
    async getLoggedInUserName(){
        await utils.waitForElement(this.loggedInUserName)
        let elementText = await utils.getElementText(this.loggedInUserName)
        return elementText
    }

    /**
     * Function is to test if the logged in agent name is displayed and 
     * @returns true if the agent name is displayed
     */
    async isLoggedInUserAgentNameDisplayed(){
        await utils.waitForElement(this.loggedInAgentName)
        let element = await utils.isElementDisplayed(this.loggedInAgentName)
        return element
    }

    /**
     * Function is to get the agent name and 
     * @returns the name of the agent
     */
    async getLoggedInUserAgentName(){
        await utils.waitForElement(this.loggedInAgentName)
        let elementText = await utils.getElementText(this.loggedInAgentName)
        return elementText
    }

    /**
     * This function is to check if the search bar is displayed and 
     * @returns true if it is displayed
     */
    async isSearchBarDisplayed(){
        await utils.waitForElement(this.searchBar)
        let element = await utils.isElementDisplayed(this.searchBar)
        return element
    }

    /**
     * This function is to check if the search icon is displayed and 
     * @returns true if it is displayed
     */
    async isSearchIcon(){
        await utils.waitForElement(this.searchIcon)
        let element = await utils.isElementDisplayed(this.searchIcon)
        return element 
    }

    /**
     * This function is to check if the search text box is present
     * @returns true 
     */
    async isSearchTextBox(){
        await utils.waitForElement(this.searchTextBox)
        let element = await utils.isElementDisplayed(this.searchTextBox)
        return element
    }

    async enterIdentityNumber(identityNumber){
        await utils.setText(this.searchTextBox, identityNumber)
    }


    /**
     * This function is to check if the search button is displayed
     * @returns true
     */
    async isSearchButton(){
        await utils.waitForElement(this.searchButton)
        let element = await utils.isElementDisplayed(this.searchButton)
        return element
    }

    
    async clickSearchButton(){
        await utils.clickElement(this.searchButton)
        await browser.pause(6000)
    }

    /**
     * This functions is to retrieve the text of the button
     * @returns button text
     */
    async getSearchButtonText(){
        await utils.waitForElement(this.searchButton)
        let elementText = await utils.getAttributeValue(this.searchButton)
        return elementText
    }

    /**
     * This functions is check if the element is displayed
     * @returns true
     */
    async isCustomerStatusText(){
        await utils.waitForElement(this.customerStatusText)
        let element = await utils.isElementDisplayed(this.customerStatusText)
        return element
    }

    /**
     * This function us retirver the customer status text and
     * @returns true
     */
    async getCustomerStatusText(){
        await utils.waitForElement(this.customerStatusText)
        let element = await utils.getElementText(this.customerStatusText)
        return element
    }

    /**
     * This function checks if the menu credit card is displayed
     * @returns true if the element is displayed
     */
    async isCreditCardMenu(){
        await utils.waitForElement(this.creditcardMenu)
        let element = await utils.isElementDisplayed(this.creditcardMenu)
        return element
    }

    /**
     * This function retrieves the text of the menu 
     * @returns the the text
     */
    async getCreditCardMenu(){  
        await utils.waitForElement(this.creditcardMenu)
        let elementText = await utils.getElementText(this.creditcardMenu)
        return elementText
    }

    async clickCreditCardMenu(){
        //await utils.waitForElement(this.creditcardMenu)
        await utils.clickElement(this.creditcardMenu)
    }

    /**
     * This function checks if the credit card icon is displayed
     * @returns true
     */
    async isCreditCardIcon(){
        await utils.waitForElement(this.creditCardIcon)
        let element = await utils.isElementDisplayed(this.creditCardIcon)
        return element
    }

    /**
     * This function checks if the store card menu is displayed and
     * @returns true
     */
    async isStoreCardMenu(){
        await utils.waitForElement(this.storeCardMenu)
        let element = await utils.isElementDisplayed(this.storeCardMenu)
        return element
    }

    /**
     * This function retrieves the text of the element
     * @returns the text
     */
    async getStoreCardMenuText(){
        await utils.waitForElement(this.storeCardMenu)
        let element = await utils.getElementText(this.storeCardMenu)
        return element
    }

    async clickStoreCardMenu(){
        await utils.clickElement(this.storeCardMenu)
    }

    /**
     * This function checks if the element is displayed
     * @returns true
     */
    async isStoreCardMenuIcon(){
        await utils.waitForElement(this.storeCardIcon)
        let element = await utils.isElementDisplayed(this.storeCardMenu)
        return element
    }

    /**
     * This function checks if the personal loan menu is displayed and 
     * @returns true
     */
    async isPersonalLoanMenu(){
        await utils.waitForElement(this.personalLoanMenu)
        let element = await utils.isElementDisplayed(this.personalLoanMenu)
        return element
    }

    async clickPersonalLoanMenu(){
        await utils.waitForElement(this.personalLoanMenu)
        await utils.clickElement(this.personalLoanMenu)
    }

    /**
     * This function retrieves the text of the menu Personal loand and 
     * @returns the text of the menu
     */
    async getPersonalLoanMenu(){
        let elementText = await utils.getElementText(this.personalLoanMenu)
        return elementText
    }

    /**
     * This function is to check if the personal loan icon is displayed
     * @returns true 
     */
    async isPersonalLoanIcon(){
        await utils.waitForElement(this.personalLoanIcon)
        let element = await utils.isElementDisplayed(this.personalLoanIcon)
        return element
    }

    /**
     * This function checks if the element find a plan text is displayed
     * @returns true 
     */
    async isFindAPlanText(){
        await utils.waitForElement(this.findaPlanText)
        let element = await utils.isElementDisplayed(this.findaPlanText)
        return element
    }

    /**
     * Function is to retrieve the element find a plan text
     * @returns the text 
     */
    async getFindAPlanText(){
        await utils.waitForElement(this.findaPlanText)
        let elementText = await utils.getElementText(this.findaPlanText)
        return elementText
    }

    /**
     * Function is to check if the element is displayed
     * @returns true
     */
    async isStep1Text(){
        await utils.waitForElement(this.step1Text)
        let element = await utils.isElementDisplayed(this.step1Text)
        return element
    }

    /**
     * Function is to retrieve the element text
     * @returns text of the element
     */
    async getStep1Text(){
        await utils.waitForElement(this.step1Text)
        let elementText = await utils.getElementText(this.step1Text)
        return elementText
    }

    /**
     * Function is to check if the describe your situation text is displayed
     * @returns true
     */
    async isDescribeYourSituationText(){
        await utils.waitForElement(this.describeYourSituationText)
        let element = await utils.isElementDisplayed(this.describeYourSituationText)
        return element
    }

    /**
     * Function retrieves the element text and 
     * @returns text of the element describe your situation
     */
    async getDescribeYourSituationText(){
        let elementText = await utils.getElementText(this.describeYourSituationText)
        return elementText
    }

    /**
     * Function is to check if the select an option dropdown is present
     * @returns true
     */
    async isSelectAnOptionDropdown(){
        await utils.waitForElement(this.selectAnOptionDropdown)
        let element = await utils.isElementDisplayed(this.selectAnOptionDropdown)
        return element
    }

    async isCustomerName(){
        await utils.waitForElement(this.customerName)
        let element = await utils.isElementDisplayed(this.customerName)
        return element
    }

    async getCustomerName(){
        let elementText = await utils.getElementText(this.customerName)
        return elementText
    }

    async isProductSection(){
        await utils.waitForElement(this.productSection)
        let element = await utils.isElementDisplayed(this.productSection)
        return element
    }

    async isProdcutIconSection(){
        await utils.waitForElement(this.productIconSection)
        let element = await utils.isElementDisplayed(this.productIconSection)
        return element
    }

    async isProductSectionText(){
        await utils.waitForElement(this.productSectionText)
        let element = await utils.isElementDisplayed(this.productSectionText)
        return element
    }

    async getProductSectionText(){
        let elementText = await utils.getElementText(this.productSectionText)
        return elementText
    }

    async isProductStatus(){
        await utils.waitForElement(this.productStatus)
        let element = await utils.isElementDisplayed(this.productStatus)
        return element
    }

    async isProductSectionAccordion(){
        await utils.waitForElement(this.productSectionAccordion)
        let element = await utils.isElementDisplayed(this.productSectionAccordion)
        return element
    }

    async clickProductSectionAccordion(){
        await utils.clickElement(this.productSectionAccordion)
    }

    async isClearButton(){
        await utils.waitForElement(this.clearButton)
        let element = await utils.isElementDisplayed(this.clearButton)
        return element
    }

    async clickClearButton(){
        await utils.clickElement(this.clearButton)
    }

    async selectSituation(text){
        await utils.waitForElement(this.selectAnOptionDropdown)
        await utils.selectVisibleText(this.selectAnOptionDropdown, text)
    }

    async isStep2Text(){
        await utils.waitForElement(this.step2Text)
        let element = await utils.isElementDisplayed(this.step2Text)
        return element
    }

    async getStep2Text(){
        await utils.waitForElement(this.step2Text)
        let elementText = await utils.getElementText(this.step2Text)
        return elementText
    }

    async isStep2SelectAnOption(){
        await utils.waitForElement(this.step2SelectAnOption)
        let element = await utils.isElementDisplayed(this.step2SelectAnOption)
        return element
    }

    async getStep2SelectAnOption(){
        let elementText = await utils.getElementText(this.step2SelectAnOption)
        return elementText
    }

    async isStep2SelectDropDown(){
        await utils.waitForElement(this.step2SelectDropdown)
        let element = await utils.isElementDisplayed(this.step2SelectDropdown)
        return element
    }
    
    async selectStep2Dropdown(text){
        await utils.selectVisibleText(this.step2SelectDropdown, text)
    }


    async getStep2DropdownText(){
        let elementText = await utils.getElementText(this.step2SelectDropdown)
        return elementText
    }

    async isCustomerNotInterestedText(){
        let element = await utils.isElementDisplayed(this.customerNotInterestedText)
        return element
    }

    async getCustomerNotInterestedText(){
        let elementText = await utils.getElementText(this.customerNotInterestedText)
        return elementText
    }

    async isCrossIcon(){
        let element = await utils.isElementDisplayed(this.crossIcon)
        return element
    }

    async isCrossImage(){
        let element = await utils.isElementDisplayed(this.crossIcon)
        return element
    }

    async isCustomerIsNotInterestedLabelText(){
        let element = await utils.isElementDisplayed(this.customerIsNotInterestedLabelText)
        return element
    }

    async getCustomerIsNotInterestedLabelText(){
        let elementText = await utils.getElementText(this.customerIsNotInterestedLabelText)
        return elementText
    }

    async isCloseApplicationButton(){
        let element = await utils.isElementDisplayed(this.closeApplicationButton)
        return element
    }

    async getCloseApplicationText(){
        let elementText = await utils.getElementText(this.closeApplicationButton)
        return elementText
    }

    async isCannotAffordPlanText(){
        let element = await utils.isElementDisplayed(this.cannotAffordPlanText)
        return element
    }

    async getCannotAffordPlanText(){
        let elementText = await utils.getElementText(this.cannotAffordPlanText)
        return elementText
    }

    async isCloseIcon(){
        let element = await utils.isElementDisplayed(this.closeIcon)
        return element
    }

    async isCannotAffordPlanImageIcon(){
        let element = await utils.isElementDisplayed(this.cannotAffordPlanImageIcon)
        return element
    }   

    async isCustomercannotaffordPlanLabelText(){
        let element = await utils.isElementDisplayed(this.customercannotaffordPlanLabelText)
        return element
    }

    async getCustomercannotaffordPlanLabelText(){
        let element = await utils.getElementText(this.customercannotaffordPlanLabelText)
        return element
    }

    async isCannotAffordCloseApplicationButton(){
        let element = await utils.isElementDisplayed(this.cannotAffordCloseApplicationButton)
        return element
    }

    async getCannotAffordCloseApplicationButtonText(){
        let element = await utils.getElementText(this.cannotAffordCloseApplicationButton)
        return element
    }

    async clickCannotAffordCloseApplicationButton(){
        await utils.clickElement(this.cannotAffordCloseApplicationButton)
    }

    async clickCrossIcon(){
        await utils.clickElement(this.crossIcon)
    }

    async clickCloseApplicationButton(){
        await utils.clickElement(this.closeApplicationButton)
    }

    async clickCannotAffordCloseApplicationButton(){
        await utils.clickElement(this.cannotAffordCloseApplicationButton)
    }

    async isNotRightNowText(){
       let element = await utils.isElementDisplayed(this.notRightNowText)
       return element
    }

    async getNotRightNowText(){
        let elementText = await utils.getElementText(this.notRightNowText)
        return elementText
    }

    async clickNotRightNowText(){
       await utils.clickElement(this.notRightNowText)
    }

    async isNotRightNowIcon(){
        let element = await utils.isElementDisplayed(this.notRightNowIcon)
        return element
    }
    
    async isNotRightNowLabelText(){
        let element = await utils.isElementDisplayed(this.notRightNowLabelText)
        return element
    }

    async getNotRightNowLabelText(){
        let elementText = await utils.getElementText(this.notRightNowLabelText)
        return elementText
    }

    async isCustomerNotInterestedRightNowText(){
        let element = await utils.isElementDisplayed(this.customerNotInterestedRightNowText)
        return element
    }

    async getCustomerNotInterestedRightNowText(){
        let elementText = await utils.getElementText(this.customerNotInterestedRightNowText)
        return elementText
    }

    async isNotRightNowCloseIcon(){
        let element = await utils.isElementDisplayed(this.notRightNowCloseIcon)
        return element
    }

    async clickNotRightNowCloseIcon(){
        utils.clickElement(this.notRightNowCloseIcon)
    }

    async isCustomerOutcomeText(){
        let element = await utils.isElementDisplayed(this.customerOutcomeText)
        return element
    }

    async getCustometOutcomeText(){
        let elementText = await utils.getElementText(this.customerOutcomeText)
        return elementText
    }
    
    async isCustomerNotInterestedIcon(){
        let element = await utils.isElementDisplayed(this.customerNotInterestedIcon)
        return element
    }

    async isCustomerNotInterestedMenuText(){
        let element = await utils.isElementDisplayed(this.customerNotInterestedMenuText)
        return element
    }

    async getCustomerNotInterestedMenuText(){
        let elementText = await utils.getElementText(this.customerNotInterestedMenuText)
        return elementText
    }

    async isCannotAffordAPlanIcon(){
        let element = await utils.isElementDisplayed(this.cannotAffordAPlanIcon)
        return element
    }

    async getCannotAffordAPlanMenuText(){
        let elementText = await utils.getElementText(this.cannotAffordAPlanMenuText)
        return elementText
    }

    async isCannotAffordAPlanMenuText(){
        let element = await utils.isElementDisplayed(this.cannotAffordAPlanMenuText)
        return element
    }

    async isNotRightNowIcon(){
        let element = await utils.getElementText(this.notRightNowICon)
        return element
    }

    async isNotRightNowText(){
        let element = await utils.isElementDisplayed(this.notRightNowText)
        return element
    }

    async getNotRightText(){
        let elementText = await utils.getElementText(this.notRightNowText)
        return elementText
    }

    async isViewPlanButton(){
        let element = await utils.isElementDisplayed(this.viewPlansButton)
        return element
    }

    async getViewPlanButton(){
        let elementText = await utils.getAttributeValue(this.viewPlansButton)
        return elementText
    }

    async clickViewPlanButton(){
        await utils.clickElement(this.viewPlansButton)
    }

}

export default new homePage()