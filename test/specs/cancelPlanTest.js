import page from "../pageobjects/page.js";
import cancelPlanPage from "../pageobjects/cancelPlanPage.js";
import loginPage from "../pageobjects/loginPage.js";
import homePage from "../pageobjects/homePage.js";
import exceldata from "../utilities/excel_data_driven.js"
import {expect} from "chai";

import path from 'path'
import exp from "constants";
//const path = require('path');

var collectionInputData = exceldata.convertToJSON(path.join(process.cwd() + '/test/testData/collectionPortalInputData.csv'),0, 'Collectionportalinputdata' )

if (!Array.isArray(collectionInputData)) {
    throw new Error('collectionInputData is not an array ------------');
}

console.log("collectionInputData" + collectionInputData)
collectionInputData.forEach((testData, index)=>{

describe("Cancel the plan for the product - " + testData.product, async function(){

    it('verify the cancel plan page is displayed', async function(){
        await loginPage.login(testData.UserName, testData.Password)
        await homePage.enterIdentityNumber(testData.identityNumber)
        await homePage.clickSearchButton()
        expect(await homePage.isCustomerName()).to.be.true
        if(testData.product == "Credit Card"){
        expect(await homePage.isCreditCardIcon()).to.be.true
        await homePage.clickCreditCardMenu()

        //await cancelPlanPage.isLogoDisplayed()
        }
        else if(testData.product == "Store Card"){
        expect(await homePage.isStoreCardMenuIcon()).to.be.true
        await homePage.clickStoreCardMenu()
        }
        else if(testData.product == "Personal Loan"){
            expect(await homePage.isPersonalLoanIcon()).to.be.true
            await homePage.clickPersonalLoanMenu()
        }
        expect(await homePage.isCancelPlan()).to.be.true
        expect(await homePage.getCancelPlan()).to.contain("Cancel Plan")
        await homePage.clickCancelPlan()
    })

    it('Verify the fields present in the cancel plan page', async function(){
        expect(await cancelPlanPage.isCrossSignDisplayed()).to.be.true
        expect(await cancelPlanPage.isAreYouSureTextDisplayed()).to.be.true
        expect(await cancelPlanPage.getAreyouSureText()).to.contain("Are you sure?")
        expect(await cancelPlanPage.isWarnTextDisplayed()).to.be.true
        expect(await cancelPlanPage.getWarnTextDisplayed()).to.contain("Please note that this action will cancel the current plan.")
        expect(await cancelPlanPage.isTextBoxDisplayed()).to.be.true
        expect(await cancelPlanPage.isProceedButtonDisplayed()).to.be.true
        expect(await cancelPlanPage.getProceedButtonText()).to.contain("Proceed")
    })

    it('Verify the user is able to cancel plan page', async function(){
        await cancelPlanPage.enterCancelPlanValue()
        expect(await cancelPlanPage.isProceedButtonDisplayed()).to.be.true
        await cancelPlanPage.clickProceedButton()

    })
})
});