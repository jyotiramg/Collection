import { util } from "chai"
import objects from "../properties/takeThisPlan.json" with {type: "json"}
import utils from "../utilities/util.js"
import page from "./page.js"

class takeThisPlanPage{

    //Object locators

    get settlementPlansText(){
        return $(objects.settlementPlansText)
    }

    get crossSign(){
        return $(objects.crossSign)
    }

    get howMuchCanYouPayText(){
        return $(objects.howMuchCanYouPayText)
    }

    get rs120Textbox(){
        return $(objects.rs120Textbox)
    }

    get minimumText(){
        return $(objects.minimumText)
    }

    get planDurationText(){
        return $(objects.planDurationText)
    }

    get minAmountText1(){
        return $(objects.minAmountText1)
    }

    get minAmountText2(){
        return $(objects.minAmountText2)
    }

    get rangeSlider(){
        return $(objects.rangeSlider)
    }

    get subInfoPlans(){
        return $(objects.subInfoPlans)
    }

    get whereCanYouPayText(){
        return $(objects.whereCanYouPayText)
    }

    get firstDateText(){
        return $(objects.firstDateText)
    }

    get selectDateBox1(){
        return $(objects.selectDateBox1)
    }

    get followingDateText(){
        return $(objects.followingDateText)
    }

    get selectDateBox2(){
        return $(objects.selectDateBox2)
    }

    get firstMonthDropDown(){
        return $(objects.firstMonthDropDown)
    }

    get lastMonthDropDown(){
        return $(objects.lastMonthDropDown)
    }

    get otherDropDown(){
        return $(objects.otherDropDown)
    }

    get textsBelow(){
        return $(objects.textsBelow)
    }

    get textValuesBelow(){
        return $(objects.textValuesBelow)
    }

    get cantAffordThesePlansButton(){
        return $(objects.cantAffordThesePlansButton)
    }

    get dueDateText(){
        return $(objects.dueDateText)
    }

    get takeThisPlanButton(){
        return $(objects.takeThisPlanButton)
    }

    //functions of take this plan page

    // async open(){
    //     await super.open("https://qa.woolworths.wfs.co.za/Collections/Login.aspx")
    // }

    async issettlementPlansText(){
        await utils.waitForElement(this.settlementPlansText)
        let element = await utils.isElementDisplayed(this.settlementPlansText)
        return element
    }

    async getSettlementPlansText(){
        let elementText = await utils.getElementText(this.settlementPlansText)
        return elementText
    }

    async isCrossSignDisplayed(){
        let element = await utils.isElementDisplayed(this.crossSign)
        return element 
    }

    async ishowMuchCanYouPayText(){
        let element = await utils.isElementDisplayed(this.howMuchCanYouPayText)
        return element
    }

    async getHowMuchCanYouPayText(){
        let elementText = await utils.getElementText(this.howMuchCanYouPayText)
        return elementText
    }
    async isRs120Textbox(){
        await utils.waitForElement(this.rs120Textbox)
        let element = await utils.isElementDisplayed(this.rs120Textbox)
        return element
    }

    async clickRsTextBox(){
        await utils.clickElement(this.rs120Textbox)
    }

    async enterAmount(amount){
        await utils.setText(this.rs120Textbox, amount)
    }

    async isminimumText(){
        let element = await utils.isElementDisplayed(this.minimumText)
        return element
    }

    async getMinimumText(){
        let elementText = await utils.getElementText(this.minimumText)
        return elementText
    }

    async isplanDurationText(){
        let element = await utils.isElementDisplayed(this.planDurationText)
        return element
    }

    async getPlanDurationText(){
        let elementText = await utils.getElementText(this.planDurationText)
        return elementText
    }

    async isminAmountText1(){
        let element = await utils.isElementDisplayed(this.minAmountText1)
        return element
    }

    async getMinAmountText1(){
        let elementText = await utils.getElementText(this.minAmountText1)
        return elementText
    }

    async isminAmountText2(){
        let element = await utils.isElementDisplayed(this.minAmountText2)
        return element
    }

    async getMinAmountText2(){
        let elementText = await utils.getElementText(this.minAmountText2)
        return elementText
    }

    async israngeSlider(){
        let element = await utils.isElementDisplayed(this.rangeSlider)
        return element
    }

    async issubInfoPlans(){
        let element = await utils.isElementDisplayed(this.subInfoPlans)
        return element
    }

    async iswhereCanYouPayText(){
        let element = await utils.isElementDisplayed(this.whereCanYouPayText)
        return element
    }

    async getWhereCnYouPayText(){
        let elementText = await utils.getElementText(this.whereCanYouPayText)
        return elementText
    }

    async isfirstDateText(){
        let element = await utils.isElementDisplayed(this.firstDateText)
        return element
    }

    async getFirstDateText(){
        let elementText = await utils.getElementText(this.firstDateText)
        return elementText
    }

    async isselectDateBox1(){
        let element = await utils.isElementDisplayed(this.selectDateBox1)
        return element
    }

    // async selectDateBox1(text){
    //     await utils.selectVisibleText(this.selectDateBox1, text)
    // }

    // async selectDropDownDate(monthElement,yearElement,dateElement,month,year,date) {
    //     await (await monthElement).selectByVisibleText(month);
    //     await (await yearElement).selectByVisibleText(year);
    //     await (await dateElement).selectByVisibleText(date).click();
    //   }

    async isfollowingDateText(){
        let element = await utils.isElementDisplayed(this.followingDateText)
        return element
    }

    async getFollowingDateText(){
        let elementText = await utils.getElementText(this.followingDateText)
        return elementText
    }

    async isselectDateBox2(){
        let element = await utils.isElementDisplayed(this.selectDateBox2)
        return element
    }

    async isfirstMonthDropDown(){
        let element = await utils.isElementDisplayed(this.firstMonthDropDown)
        return element
    }

    async islastMonthDropDown(){
        let element = await utils.isElementDisplayed(this.lastMonthDropDown)
        return element
    }

    async isotherDropDown(){
        let element = await utils.isElementDisplayed(this.otherDropDown)
        return element
    }

    async selectDropDownMonth(text){
        let element = await utils.selectDropDown(this.firstMonthDropDown, text)
        return element
    }

    async istextsBelow(){
        let element = await utils.isElementDisplayed(this.textsBelow)
        return element
    }

    async istextValuesBelow(){
        let element = await utils.isElementDisplayed(this.textValuesBelow)
        return element
    }

    async iscantAffordThesePlansButton(){
        let element = await utils.isElementDisplayed(this.cantAffordThesePlansButton)
        return element
    }

    async isdueDateText(){
        let element = await utils.isElementDisplayed(this.dueDateText)
        return element
    }

    async istakeThisPlanButton(){
    let element = await utils.isElementDisplayed(this.takeThisPlanButton)
    return element
    }
}

export default new takeThisPlanPage() 