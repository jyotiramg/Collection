import loginPage  from "../pageobjects/loginPage.js"
import homePage from "../pageobjects/homePage.js"
import exceldata from "../utilities/excel_data_driven.js"
import {expect} from "chai";

import path from 'path'
//const path = require('path');



var collectionInputData = exceldata.convertToJSON(path.join(process.cwd() + '/test/testData/collectionPortalInputData.csv'),0, 'Collectionportalinputdata' )

if (!Array.isArray(collectionInputData)) {
    throw new Error('collectionInputData is not an array');
}

console.log("collectionInputData" + collectionInputData)
collectionInputData.forEach((testData, index)=>{
    

describe("Home page test", async function(){
    it('Verify the home page is displayed', async function(){
        await loginPage.login(testData.UserName, testData.Password)
        expect(await homePage.isLoggedInUserAgentNameDisplayed()).to.be.true
        expect(await homePage.isLoggedInUserNameDisplayed()).to.be.true
        expect(await homePage.isLoggedInUserProfileIconDisplayed()).to.be.true
        expect(await homePage.getLoggedInUserAgentName()).to.contain(testData.Agency)
        expect(await homePage.getLoggedInUserName()).to.contain("collection test4 BLK")
    })

    it('Verify the Search bar is present', async function(){
        expect(await homePage.isSearchBarDisplayed()).to.be.true
        expect(await homePage.isSearchIcon()).to.be.true
        expect(await homePage.isSearchButton()).to.be.true
        expect(await homePage.isSearchTextBox()).to.be.true
        expect(await homePage.getSearchButtonText()).to.contain("Search")

    })

    it('Verify the products header tab is displayed in the home page', async function(){
        expect(await homePage.isCustomerStatusText()).to.be.true
        expect(await homePage.getCustomerStatusText()).to.contain("Customer Status")
        expect(await homePage.isCreditCardIcon()).to.be.true
        expect(await homePage.isCreditCardMenu()).to.be.true
        expect(await homePage.getCreditCardMenu()).to.contain("Credit Card")
        expect(await homePage.isPersonalLoanIcon()).to.be.true
        expect(await homePage.isPersonalLoanMenu()).to.be.true
        expect(await homePage.getPersonalLoanMenu()).to.contain("Personal Loan")
        expect(await homePage.isStoreCardMenu()).to.be.true
        expect(await homePage.isStoreCardMenuIcon()).to.be.true
        expect(await homePage.getStoreCardMenuText()).to.contain("Store Card")
    })

    it('Verify the find a plan is displayed', async function(){
        expect(await homePage.isFindAPlanText()).to.be.true
        expect(await homePage.getFindAPlanText()).to.contain("Find a Plan")
        expect(await homePage.isStep1Text()).to.be.true
        expect(await homePage.getStep1Text()).to.contain("STEP 1")
        expect(await homePage.isDescribeYourSituationText()).to.be.true
        expect(await homePage.getDescribeYourSituationText()).to.contain("Describe your situation")
        expect(await homePage.isSelectAnOptionDropdown()).to.be.true
    })

    if(testData.Scenario == "identityNumber"){
    it('Verify agent is able search user using identity number', async function(){
        await homePage.enterIdentityNumber(testData.identityNumber)
        await homePage.clickSearchButton()
        expect(await homePage.isCustomerName()).to.be.true
        expect(await homePage.isProductSection()).to.be.true
        expect(await homePage.getProductSectionText()).to.contain(testData.product)
        await homePage.clickClearButton()

    })
    }
    if(testData.Scenario == "accountNumber"){
    it('Verify the agent is able to search user using Account number', async function(){
        await homePage.enterIdentityNumber(testData.accountNumber)
        await homePage.clickSearchButton()
        expect(await homePage.isCustomerName()).to.be.true
        expect(await homePage.isProductSection()).to.be.true
        expect(await homePage.getProductSectionText()).to.contain(testData.product)
    })
    }

    // it('Verify the customer outcome menu is displayed', async function(){
    //     await browser.pause(50000)
    //     await homePage.enterIdentityNumber(testData.identityNumber)
    //     await homePage.clickSearchButton()
    //     expect(await homePage.isCustomerName()).to.be.true
    //     expect(await homePage.isCustomerOutcomeText()).to.be.true
    //     expect(await homePage.isCustomerNotInterestedIcon()).to.be.true
    //     expect(await homePage.isCustomerNotInterestedMenuText()).to.be.true
    //     expect(await homePage.isCannotAffordAPlanIcon()).to.be.true
    //     expect(await homePage.isCannotAffordAPlanMenuText()).to.be.true
    //     expect(await homePage.isNotRightNowIcon()).to.be.true
    //     expect(await homePage.isNotRightNowText()).to.be.true
    // })
})

});