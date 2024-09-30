import { util } from "chai"
import objects from "../properties/cancelPlan.json" with {type: "json"}
import utils from "../utilities/util.js"
import page from "./page.js"

class cancelPlanPage{
    
    get logo(){
        return $(objects.logo)
    }

    get crossSign(){
        return $(objects.crossSign)
    }

    get areYouSureText(){
        return $(objects.areYouSureText)
    }

    get warnText(){
        return $(objects.warnText)
    }

    get textBox(){
        return $(objects.textBox)
    }

    get proceedButton(){
        return $(objects.proceedButton)
    }

    //functions of cancel plan page
   
    async isLogoDisplayed(){
        let element = await utils.isElementDisplayed(this.logo)
        return element
    }

    async isCrossSignDisplayed(){
        await utils.waitForElement(this.crossSign)
        let element = await utils.isElementDisplayed(this.crossSign)
        return element
    }

    async isAreYouSureTextDisplayed(){
        let element = await utils.isElementDisplayed(this.areYouSureText)
        return element
    }

    async getAreyouSureText(){
        let elementText = await utils.getElementText(this.areYouSureText)
        return elementText
    }

    async isWarnTextDisplayed(){
        let element = await utils.isElementDisplayed(this.warnText)
        return element
    }

    async getWarnTextDisplayed(){
        let elementText = await utils.getElementText(this.warnText)
        return elementText
    }

    async isTextBoxDisplayed(){
        let element = await utils.isElementDisplayed(this.textBox)
        return element
    }

    async enterCancelPlanValue() {

        await utils.setText(this.textBox, "test123343535")
        // const placeholderValue = 'Cancel Plan By tester'; // The text you want to set as the new placeholder value
    
        // const script = `document.getElementById('wtInformationModal_wtContent_wt77_wtFreeTextField_wt723').setAttribute('placeholder', '${placeholderValue}')`;
    
        // await browser.execute(script);
        // await browser.pause(6000)
        // console.log("Placeholder value set successfully.");
    }
    
    
    
    async isProceedButtonDisplayed(){
        let element = await utils.isElementDisplayed(this.proceedButton)
        return element
    }

    async getProceedButtonText(){
        let elementText = await utils.getAttributeValue(this.proceedButton)
        return elementText
    }

    async clickProceedButton(){
        await utils.scrollToElement(this.proceedButton)
        await utils.waitForElement(this.proceedButton)
      //  await browser.pause(40000)
        await utils.clickElement(this.proceedButton)
    }

}

export default new cancelPlanPage() 