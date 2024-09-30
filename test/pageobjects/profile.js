import objects from '../properties/profile.json' with {type : 'json'}
import utils from '../utilities/util.js'

class profile{

    get profileIcon() {return $(objects.profileIcon)}
    get Wlogo() {return $(objects.Wlogo)}
    get collectionTestText() {return $(objects.collectionTestText)}
    get agentNameText() {return $(objects.agentNameText)}
    get signOutIcon() {return $(objects.signOutIcon)}
    get myInfoText() {return $(objects.myInfoText)}
    get changePasswordLink() {return $(objects.changePasswordLink)}
    get nameLabelText() {return $(objects.nameLabelText)}
    get nameText() {return $(objects.nameText)}
    get phoneLabelText() {return $(objects.phoneLabelText)}
    get emailLabelText() {return $(objects.emailLabelText)}
    get collectionPortalText() {return $(objects.collectionPortalText)}

    async isProfileIcon(){
        await utils.waitForElement(this.profileIcon)
        let value = await utils.isElementDisplayed(this.profileIcon)
        return value
    }

    async isWlogo(){
        await utils.waitForElement(this.Wlogo)
        let value = await utils.isElementDisplayed(this.Wlogo)
        return value
    }

    async clickWlogo(){
        await utils.clickElement(this.Wlogo)
    }

    async isCollectionTestText(){
        await utils.waitForElement(this.collectionTestText)
        let value = await utils.isElementDisplayed(this.collectionTestText)
        return value
    }

    async isAgentNameText(){
        await utils.waitForElement(this.agentNameText)
        let value = await utils.isElementDisplayed(this.agentNameText)
        return value
    }

    async getAgentNameText(){
        let elementText = await utils.getElementText(this.agentNameText)
        return elementText
     }

    async isSignOutIcon(){
        await utils.waitForElement(this.signOutIcon)
        let value = await utils.isElementDisplayed(this.signOutIcon)
        return value
    }

    async clickSignOutIcon(){
        await utils.clickElement(this.signOutIcon)
    }

    async isMyInfoText(){
        await utils.waitForElement(this.myInfoText)
        let value = await utils.isElementDisplayed(this.myInfoText)
        return value
    }

    async getMyInfoText(){
        let elementText = await utils.getElementText(this.myInfoText)
        return elementText
    }

    async isChangePasswordLink(){
        await utils.waitForElement(this.changePasswordLink)
        let value = await utils.isElementDisplayed(this.changePasswordLink)
        return value
    }

    async getChangePasswordLink(){
        let elementText = await utils.getElementText(this.changePasswordLink)
        return elementText
    }

    async clickChangePasswordLink(){
        await utils.clickElement(this.clickChangePasswordLink)
    }

    async isNameLabelText(){
        let value = await utils.isElementDisplayed(this.nameLabelText)
        return value
    }

    async getNameLabelText(){
        let elementText = await utils.getElementText(this.nameLabelText)
        return elementText
    }

    async isNameText(){
        let value = await utils.isElementDisplayed(this.nameText)
        return value
    }

    async getNameText(){
        let elementText = await utils.getElementText(this.nameText)
        return elementText
    }

    async isPhoneLabelText(){
        let value = await utils.isElementDisplayed(this.phoneLabelText)
        return value
    }

    async getPhoneLabelText(){
        let elementText = await utils.getElementText(this.phoneLabelText)
        return elementText
    }

    async isEmailLabelText(){
        let value = await utils.isElementDisplayed(this.emailLabelText)
        return value
    }

    async getEmailLabelText(){
        let elementText = await utils.getElementText(this.emailLabelText)
        return elementText
    }

    async isCollectionPortalText(){
        let value = await utils.isElementDisplayed(this.collectionPortalText)
        return value
    }

    async getCollectionPortalText(){
        let elementText = await utils.getElementText(this.collectionPortalText)
        return elementText
    }

}

export default new profile()