import loginPage from "../pageobjects/loginPage.js";
import homePage from "../pageobjects/homePage.js";
import excelData from "../utilities/excel_data_driven.js";
import { expect } from "chai";

import path from 'path';
import exp from "constants";


var collectionInputData = excelData.convertToJSON(path.join(process.cwd()+ '/test/testData/collectionPortalInputData.csv'),0, 'Collectionportalsecurityquestion')

collectionInputData.forEach((testData, index)=>{

    describe("Security Question Test", async function(){
        it('Verify user able to select the option from situation dropdown', async function(){
            await loginPage.login(testData.UserName, testData.Password)
            await homePage.enterIdentityNumber(testData.identityNumber)
            await homePage.clickSearchButton()
            expect(await homePage.isCustomerName()).to.be.true
            expect(await homePage.isProductSection()).to.be.true
            expect(await homePage.isStep1Text()).to.be.true
            await homePage.selectSituation("I have completely lost my Income")
        })

        it('Verify step 2 section is displayed', async function(){
            expect(await homePage.isStep2Text()).to.be.true
            expect(await homePage.getStep2Text()).to.contain("STEP 2")
            expect(await homePage.isStep2SelectAnOption()).to.be.true
            expect(await homePage.getStep2SelectAnOption()).to.contain("Select an option that supports your situation")
            expect(await homePage.isStep2SelectDropDown()).to.be.true
        })

        it('Verify the user is able to select the option which supports your situation', async function(){
            await homePage.selectStep2Dropdown("Pensioner")
            expect(await homePage.getStep2DropdownText()).to.contain("Pensioner")
            await homePage.clickViewPlanButton()
            await homePage.isHomePageLogoDisplayed()
        })
    })
})