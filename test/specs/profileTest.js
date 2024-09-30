import loginPage from "../pageobjects/loginPage.js"
import homePage from "../pageobjects/homePage.js"
import profilePage from "../pageobjects/profile.js"
import excelData from "../utilities/excel_data_driven.js";
import { expect } from "chai";

import path from 'path';
import { profile } from "console";

var collectionInputData = excelData.convertToJSON(path.join(process.cwd()+ '/test/testData/collectionPortalInputData.csv'),0, 'Collectionportalinputdata')

collectionInputData.forEach((testData, index)=>{

describe("Profile Test", async function(){
    it('Verify My info page is displayed', async function(){
        await loginPage.login(testData.UserName, testData.Password)
        await homePage.isLoggedInUserProfileIconDisplayed()
        await homePage.clickLoggedInUserProfileIcon()
        await profilePage.isMyInfoText()
    })

    it('Verify the fields present in the profile page', async function(){
        expect(await profilePage.isProfileIcon()).to.be.true
        expect(await profilePage.isWlogo()).to.be.true
        expect(await profilePage.isCollectionTestText()).to.be.true
        expect(await profilePage.isAgentNameText()).to.be.true
        //expect(await profilePage.getAgentNameText()).to.contain(testData.agentName)
        expect(await profilePage.isSignOutIcon()).to.be.true
        expect(await profilePage.isMyInfoText()).to.be.true
        expect(await profilePage.isChangePasswordLink()).to.be.true
        expect(await profilePage.getChangePasswordLink()).to.contain("Change Password")
        expect(await profilePage.isNameLabelText()).to.be.true
        expect(await profilePage.getNameLabelText()).to.contain("Name")
        expect(await profilePage.isNameText()).to.be.true
        expect(await profilePage.getNameText()).to.contain("Collection test6 NRS")
        expect(await profilePage.isPhoneLabelText()).to.be.true
        expect(await profilePage.getPhoneLabelText()).to.contain("Phone")
        expect(await profilePage.isEmailLabelText()).to.be.true
        expect(await profilePage.getEmailLabelText()).to.contain("Email")
        expect(await profilePage.isCollectionPortalText()).to.be.true
        expect(await profilePage.getCollectionPortalText()).to.contain("_CollectionPortal")
                   
    })

    it('Verify user navigates to home page from profile page', async function(){
        await profilePage.clickWlogo()
        expect(await homePage.isLoggedInUserAgentNameDisplayed()).to.be.true
        expect(await homePage.isLoggedInUserNameDisplayed()).to.be.true
        expect(await homePage.isLoggedInUserProfileIconDisplayed()).to.be.true
        expect(await homePage.getLoggedInUserAgentName()).to.contain(testData.Agency)
        expect(await homePage.getLoggedInUserName()).to.contain("Collection test1 FUS")
        expect(await homePage.isSearchBarDisplayed()).to.be.true
        expect(await homePage.isSearchIcon()).to.be.true
        expect(await homePage.isSearchButton()).to.be.true
        expect(await homePage.isSearchTextBox()).to.be.true
        expect(await homePage.getSearchButtonText()).to.contain("Search")
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
        expect(await homePage.isFindAPlanText()).to.be.true
        expect(await homePage.getFindAPlanText()).to.contain("Find a Plan")
        expect(await homePage.isStep1Text()).to.be.true
        expect(await homePage.getStep1Text()).to.contain("STEP 1")
        expect(await homePage.isDescribeYourSituationText()).to.be.true
        expect(await homePage.getDescribeYourSituationText()).to.contain("Describe your situation")
        expect(await homePage.isSelectAnOptionDropdown()).to.be.true
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
 
    })

    it('Verify user signs out from the application', async function(){
        await homePage.clickLoggedInUserProfileIcon();
        await profilePage.isSignOutIcon();
        await profilePage.clickSignOutIcon();
        await loginPage.isWoolworthsLogoDisplayed()
        await loginPage.isEnterYourDetailsLabel()
        expect(await loginPage.getEnterYourDetailsLabelText()).to.contain("Enter your details to get started.")
        await loginPage.isUsernameLabel()
        expect(await loginPage.getUsernameLabelText()).to.contain("Username or Staff Number:")
        expect(await loginPage.isUsernameTextBox()).to.be.true
        expect(await loginPage.getPasswordLabelText()).to.contain("Password:")
        expect(await loginPage.isPasswordTextBox()).to.be.true
        expect(await loginPage.isLoginButton()).to.be.true
        expect(await loginPage.getLoginButtonText()).to.contain("Login")
        expect(await loginPage.isForgotPasswordLink()).to.be.true
        expect(await loginPage.getForgotPasswordLinkText()).to.contain("Forgot Password?")
    })

    
})

})