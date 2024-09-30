import page from "../pageobjects/page.js";
import loginPage from "../pageobjects/loginPage.js";
import homePage from "../pageobjects/homePage.js";
import exceldata from "../utilities/excel_data_driven.js"
import {expect} from "chai";

import path from 'path'
import takeThisPlanPage from "../pageobjects/takeThisPlanPage.js";
//const path = require('path');

var collectionInputData = exceldata.convertToJSON(path.join(process.cwd() + '/test/testData/collectionPortalInputData.csv'),0, 'Collectionportalinputdata' )

if (!Array.isArray(collectionInputData)) {
    throw new Error('collectionInputData is not an array');
}

console.log("collectionInputData" + collectionInputData)
collectionInputData.forEach((testData, index)=>{

describe("Take this plan function", async function(){

    it('Verify that settlement plan page is displayed', async function(){
        await loginPage.login(testData.UserName, testData.Password)
        await homePage.enterIdentityNumber("8506057082081")
        await homePage.clickSearchButton()
        expect(await homePage.isCreditCardIcon()).to.be.true
        await homePage.clickCreditCardMenu()
        await homePage.clickNewPlan()
        await homePage.clickCreateCustomPlan()
        await takeThisPlanPage.issettlementPlansText()
        expect(await takeThisPlanPage.issettlementPlansText()).to.be.true
        expect(await takeThisPlanPage.getSettlementPlansText()).to.contain("Settlement Plans")
    })

    it('Verify the fields present in take this plan page', async function(){
        await takeThisPlanPage.issettlementPlansText()
        expect(await takeThisPlanPage.issettlementPlansText()).to.be.true
        expect(await takeThisPlanPage.isCrossSignDisplayed()).to.be.true
        expect(await takeThisPlanPage.ishowMuchCanYouPayText()).to.be.true
        expect(await takeThisPlanPage.getHowMuchCanYouPayText()).to.contain("How much can you pay?")
        expect(await takeThisPlanPage.isRs120Textbox()).to.be.true
        await takeThisPlanPage.clickRsTextBox()
        await takeThisPlanPage.enterAmount("180")
        expect(await takeThisPlanPage.isminimumText()).to.be.true
        expect(await takeThisPlanPage.getMinimumText()).to.contain("(Minimum R170.11)")
        expect(await takeThisPlanPage.isplanDurationText()).to.be.true
        expect(await takeThisPlanPage.getPlanDurationText()).to.contain("Plan Duration")
        expect(await takeThisPlanPage.isminAmountText1()).to.be.true
        expect(await takeThisPlanPage.getMinAmountText1()).to.contain("R765.49")
        expect(await takeThisPlanPage.isminAmountText2()).to.be.true
        expect(await takeThisPlanPage.getMinAmountText2()).to.contain("(Min Amount)")
        expect(await takeThisPlanPage.israngeSlider()).to.be.true
        expect(await takeThisPlanPage.issubInfoPlans()).to.be.true
        expect(await takeThisPlanPage.iswhereCanYouPayText()).to.be.true
        expect(await takeThisPlanPage.getWhereCnYouPayText()).to.contain("When Can You Pay?")
        expect(await takeThisPlanPage.isfirstDateText()).to.be.true
        expect(await takeThisPlanPage.getFirstDateText()).to.contain("First Instalment Date:")
        //expect(await takeThisPlanPage.isselectDateBox1()).to.be.true
       // await takeThisPlanPage.selectDateBox1()
       // await takeThisPlanPage.selectDropDownDate()
        expect(await takeThisPlanPage.isfollowingDateText()).to.be.true
        expect(await takeThisPlanPage.getFollowingDateText()).to.contain("Following Instalments Date:")
        expect(await takeThisPlanPage.isselectDateBox2()).to.be.true
        //expect(await takeThisPlanPage.isfirstMonthDropDown()).to.be.true
        //expect(await takeThisPlanPage.islastMonthDropDown()).to.be.true
        //expect(await takeThisPlanPage.isotherDropDown()).to.be.true
        await takeThisPlanPage.selectDropDownMonth("First Day of the Month")
        expect(await takeThisPlanPage.istextsBelow()).to.be.true
        expect(await takeThisPlanPage.istextValuesBelow()).to.be.true
        expect(await takeThisPlanPage.iscantAffordThesePlansButton()).to.be.true
        expect(await takeThisPlanPage.isdueDateText()).to.be.true
        expect(await takeThisPlanPage.istakeThisPlanButton()).to.be.true
    })

})
});