import utils from "../utilities/util.js"
import Objects from "../properties/login.json" with {type: "json"}
import page from "./page.js"
import { util } from "chai"

class loginPage extends page{
        
    /**
     * Objects for the locators in the log in page
     */
    get woolworthsLogo(){ return $(Objects.woolworths_logo)}
    get enterYourDetailsLabel() {return $(Objects.enterYourDetails_label)}
    get usernameLabel() {return $(Objects.username_label)}
    get usernameTextbox() {return $(Objects.username_textbox)}
    get passwordLabel() {return $(Objects.password_label)}
    get passwordTextbox() {return $(Objects.password_textbox)}
    get loginButton() {return $(Objects.login_button)}
    get forgotPasswordLink() {return $(Objects.forgotPassword_link)}

    /**
     * Functions of the login page
     */

    async open(){
        await super.open("https://qa.woolworths.wfs.co.za/Collections/Login.aspx")
        await browser.maximizeWindow()

    }

    async isWoolworthsLogoDisplayed(){
        let element = await utils.isElementDisplayed(this.woolworthsLogo)
        return element
    }

    async isEnterYourDetailsLabel(){
        let element = await utils.isElementDisplayed(this.enterYourDetailsLabel)
        return element
    }

    async getEnterYourDetailsLabelText(){
        let elementText = await utils.getElementText(this.enterYourDetailsLabel)
        return elementText
    }

    async isUsernameLabel(){
        let element = await utils.isElementDisplayed(this.usernameLabel)
        return element
    }

    async getUsernameLabelText(){
        let elementText = await utils.getElementText(this.usernameLabel)
        return elementText
    }

    async isUsernameTextBox(){
        let element = await utils.isElementDisplayed(this.usernameTextbox)
        return element
    }

    async getUsernameTextBoxValue(){
        let placeholderText = await this.usernameTextbox.getValue()
        return placeholderText
    }

    async enterUsernameTextBox(userName){
        await utils.setText(this.usernameTextbox, userName)
    }

    async isPasswordLabel(){
        let element = await utils.isElementDisplayed(this.passwordLabel)
        return element
    }

    async getPasswordLabelText(){
        let elementText = await utils.getElementText(this.passwordLabel)
        return elementText
    }

    async isPasswordTextBox(){
        let element = await utils.isElementDisplayed(this.passwordTextbox)
        return element 
    }

    async getPasswordTextBoxValue(){
        let placeholderText = await this.passwordTextbox.getValue()
        return placeholderText
    }

    async enterPassword(password){
        await utils.setText(this.passwordTextbox, password)
    }

    async isLoginButton(){
        let element = await utils.isElementDisplayed(this.loginButton)
        return element
    }

    async getLoginButtonText(){
        let elementText = await this.loginButton.getValue()
        return elementText
    }

    async isLoginButtonEnable(){
        let element = await utils.isElementEnabled(this.loginButton)
        return element
    }

    async clickLoginButton(){
        await utils.clickElement(this.loginButton)
    }

    async isForgotPasswordLink(){
        let element = await utils.isElementDisplayed(this.forgotPasswordLink)
        return element
    }

    async getForgotPasswordLinkText(){
        let elementText = await utils.getElementText(this.forgotPasswordLink)
        return elementText
    }

    async isForgotPasswordLinkEnabled(){
        let elementEnabled = await utils.isElementEnabled(this.forgotPasswordLink)
        return elementEnabled
    }

    async clickForgotPasswordLinkText(){
        await utils.clickElement(this.forgotPasswordLink)
    }

    async login(userName, password){
        await this.open()
        await this.enterUsernameTextBox(userName)
        await this.enterPassword(password)
        await this.clickLoginButton()
    }
}
export default new loginPage()