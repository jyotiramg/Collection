//import { expect } from '@wdio/globals'
import loginPage from "../pageobjects/loginPage.js";
import homePage from "../pageobjects/homePage.js";
import dbConnectivity from "../utilities/dbConnectivity.js";
import { expect } from "chai";

describe("Login Test Function", async function(){

    before(async () =>{
        await dbConnectivity.connectToDatabase();
    });

    it('Verify the collections portal login page is displayed', async function(){
        await loginPage.open()
        await loginPage.isWoolworthsLogoDisplayed()
        await loginPage.isEnterYourDetailsLabel()
        expect(await loginPage.getEnterYourDetailsLabelText()).to.contain("Enter your details to get started.")
    })

    it('Verify the Fields present in the login page', async function(){
        await loginPage.isUsernameLabel()
        /**
         * Testing DB
         */
        console.log("**********DB Connectivity*****************")
        const query =  'Select * from accounts limit 1';
        await dbConnectivity.performDatabaseOperation(query);    
        console.log("**********DB Connectivity*****************")    
        /**
         * Testing DB conectivity
         */
        expect(await loginPage.getUsernameLabelText()).to.contain("Username or Staff Number:")
        expect(await loginPage.isUsernameTextBox()).to.be.true
       // expect(await loginPage.getUsernameTextBoxValue()).to.contain("Enter your Username or Staff number")
        expect(await loginPage.getPasswordLabelText()).to.contain("Password:")
        expect(await loginPage.isPasswordTextBox()).to.be.true
       // expect(await loginPage.getPasswordTextBoxValue()).to.contain("Enter Password")
        expect(await loginPage.isLoginButton()).to.be.true
        expect(await loginPage.getLoginButtonText()).to.contain("Login")
        //expect(await loginPage.isLoginButtonEnable()).to.be.true
        expect(await loginPage.isForgotPasswordLink()).to.be.true
        expect(await loginPage.getForgotPasswordLinkText()).to.contain("Forgot Password?")
      //  expect(await loginPage.isForgotPasswordLinkEnabled()).to.be.true
    })

    it('Verify login with valid data', async function(){
        await loginPage.isUsernameLabel()
        await loginPage.enterUsernameTextBox("collectiontest6")
        await loginPage.enterPassword("12345678")
        await loginPage.clickLoginButton()
        await homePage.isLoggedInUserAgentNameDisplayed()
    })
})