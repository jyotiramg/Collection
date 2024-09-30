
import objects from "../properties/paymentPlans.json" with {type: "json"}
import utils from "../utilities/util.js"

class paymentPlans{

    get planTitle() {return $(objects.planTitle)}
    get plansTabCurrentNewPlans() {return $(objects.plansTabCurrentNewPlans)}
    get currentPlanInputButton() {return $(objects.currentPlanInputButton)}
    get currentPlanText() {return $(objects.currentPlanText)}
    get paymentPlanTableHeader() {return $(objects.paymentPlanTableHeader)}
    get planNameText() {return $(objects.planNameText)}
    get balanceOutstanding() {return $(objects.balanceOutstanding)}
    get discountAmount() {return $(objects.discountAmount)}
    get settlementAmount() {return $(objects.settlementAmount)}
    get monthlyInstallment() {return $(objects.monthlyInstallment)}
    get newPlansTab() {return $(objects.newPlansTab)}
    get newPlansText() {return $(objects.newPlansText)}
    get createCustomPlanButton() {return $(objects.createCustomPlanButton)}
    get firstInstallmentText() {return $(objects.firstInstallmentText)}
    get lastInstallmentText() {return $(objects.lastInstallmentText)}
    get installmentsText() {return $(objects.installmentsText)}
    get openToBuyText() {return $(objects.openToBuyText)}
    get arrearsClearedText() {return $(objects.arrearsClearedText)}
    get positiveBureau() {return $(objects.positiveBureau)}
    get planItemDescription() {return $(objects.planItemDescription)}
    get arrearsRecoveryText() {return $(objects.arrearsRecoveryText)}
    get monthNumber() {return $(objects.monthNumber)}
    get monthsText() {return $(objects.monthsText)}
    get firstInstallmentAmount() {return $(objects.firstInstallmentAmount)}
    get firstInstallmentMonth() {return $(objects.firstInstallmentMonth)}
    get lastInstallmentAmount() {return $(objects.lastInstallmentAmount)}
    get lastInstallmentMonth() {return $(objects.lastInstallmentMonth)}
    get installmentText() {return $(objects.installmentText)}
    get openToBuyRand() {return $(objects.openToBuyRand)}
    get arrearsClearedRand() {return $(objects.arrearsClearedRand)}
    get positiveBureauIconArrears() {return $(objects.positiveBureauIconArrears)}
    get partialReliefText() {return $(objects.partialReliefText)}
    get partialReliefMonth() {return $(objects.partialReliefMonth)}
    get firstInstallmentRand() {return $(objects.firstInstallmentRand)}
    get firstInstallmentPartialReliefRand() {return $(objects.firstInstallmentPartialReliefRand)}
    get firstInstallmentPartialReliefMonth() {return $(objects.firstInstallmentPartialReliefMonth)}
    get lastInstallmentPartialReliefRand() {return $(objects.lastInstallmentPartialReliefRand)}
    get lastInstallmentPartialReliefMonth() {return $(objects.lastInstallmentPartialReliefMonth)}
    get installmentMonth() {return $(objects.installmentMonth)}
    get PartialReliefOpenToBuyRand() {return $(objects.PartialReliefOpenToBuyRand)}
    get PartialReliefArrearsCleared() {return $(objects.PartialReliefArrearsCleared)}
    get partialReliefPositiveBureauIcon() {return $(objects.partialReliefPositiveBureauIcon)}
    get flexiblePaymentArrangementPlanButton() {return $(objects.flexiblePaymentArrangementPlanButton)}
    get newPlansList() {return $(objects.newPlansList)}
    get currentPlanLabelText() {return $(objects.currentPlanLabelText)}

    get currentPlanStatusText() {return $(objects.currentPlanStatusText)}
    get planNameLabelText() {return $(objects.planNameLabelText)}
    get newPlansTab() {return $(objects.newPlansTab)}
    get newPlansText() {return $(objects.newPlansText)}
 

/**
 * Functions of the payment plan section
 */

/**
 * This function checks for the element is displayed and 
 * @returns the value if the element is present
 */
    async isPlanTitleDisplayed(){
        await utils.waitForElement(this.planTitle)
        let element = await utils.isElementDisplayed(this.planTitle)
        return element
    }

    /**
     * This function is defined to get the element text and 
     * @returns text of the element
     */
    async getPlanTitleText(){
        let elementText = await utils.getElementText(this.planTitle)
        return elementText
    }

    async currentPlanInputButton(){
        await utils.waitForElement(this.currentPlanInputButton)
        let element = await utils.isElementDisplayed(this.currentPlanInputButton)
        return element
    }

    async clickCurrentPlanInputButton(){
        await utils.clickElement(this.currentPlanInputButton)
    }

    async getCurrentPlanInputButtonText(){
        let elementText = await utils.getElementText(this.currentPlanText)
        return elementText
    }

    async isPaymentPlanTableHeader(){
        let element = await utils.isElementDisplayed(this.paymentPlanTableHeader)
        return element
    }

    async getPaymentPlanTableHeaderValue(){
        let elementText = await utils.getElementText(this.paymentPlanTableHeader)
        return elementText
    }

    async isPlanNameText(){
        let element = await utils.isElementDisplayed(this.planNameText)
        return element
    }

    async getPlanNameText(){
        let elementText = await utils.getElementText(this.planNameText)
        return elementText;   
    }

    async isBalanceOutstanding(){
        let element = await utils.isElementDisplayed(this.balanceOutstanding)
        return elment
    }

    async getBalanceOutstandingText(){
        let elementText = await utils.getElementText(this.balanceOutstanding)
        return elementText
    }

    async isDiscountAmount(){
        let element = await utils.isElementDisplayed(this.discountAmount)
        return element
    }

    async getDiscountAmount(){
        let elementText = await utils.getElementText(this.discountAmount)
        return elementText
    }

    async isSettlementAmount(){
        let element = await utils.isElementDisplayed(this.settlementAmount)
        return element
        }

    async getSettlementAmountText(){
        let elementText = await utils.getElementText(this.settlementAmount)
        return elementText
    }

    async isMonthlyInstallment(){
        let element = await utils.isElementDisplayed(this.paymentPlanTableHeader)
        return element
    } 

    async getMonthlyInstallmentText(){
        let elementText = await utils.isElementDisplayed(this.monthlyInstallment)
        return elementText
    }

    async isCreateCustomPlanButton(){
        let elementText = await utils.isElementDisplayed(this.createCustomPlanButton)
        return elementText
    }

    async clickCreateCustomPlanButton(){
        await utils.clickElement(this.createCustomPlanButton)
    }

    async getCreateCustomPlanButtonText(){
        await utils.getAttributeValue(this.createCustomPlanButton)
    }

    async isFirstInstallmentText(){
        await utils.waitForElement(this.firstInstallmentText)
        let value = await utils.isElementDisplayed(this.firstInstallmentText)
        return value
    }

    async getFirstInstallmentText(){
        let text = await utils.getElementText(this.firstInstallmentText)
        return text
    }

    async isLastInstallmentText(){
        await utils.waitForElement(this.lastInstallmentText)
        let value = await utils.isElementDisplayed(this.lastInstallmentText)
        return value
    }

    async getLastInstallmentText(){
        let text = await utils.getElementText(this.lastInstallmentText)
        return text
    }

    async isInstallmentsText(){
        await utils.waitForElement(this.installmentsText)
        let value = await utils.isElementDisplayed(this.installmentsText)
        return value
    }

    async getInstallmentsText(){
        let text = await utils.getElementText(this.installmentsText)
        return text
    }

    async isOpenToBuyText(){
        await utils.waitForElement(this.openToBuyText)
        let value = await utils.isElementDisplayed(this.openToBuyText)
        return value
    }

    async getOpenToBuyText(){
        let text = await utils.getElementText(this.openToBuyText)
        return text
    }

    async isArrearsClearedText(){
        await utils.waitForElement(this.arrearsClearedText)
        let value = await utils.isElementDisplayed(this.arrearsClearedText)
        return value
    }

    async getArrearsClearedText(){
        let text = await utils.getElementText(this.arrearsClearedText)
        return text
    }

    
    async isPositiveBureau(){
        await utils.waitForElement(this.positiveBureau)
        let value = await utils.isElementDisplayed(this.positiveBureau)
        return value
    }

    async getPositiveBureau(){
        let text = await utils.getElementText(this.positiveBureau)
        return text
    }
   
    async isPlanItemDescription(){
        await utils.waitForElement(this.planItemDescription)
        let value = await utils.isElementDisplayed(this.planItemDescription)
        return value
    }

    async getPlanItemDescription(){
        let text = await utils.getElementText(this.planItemDescription)
        return text
    }

    async isArrearsRecoveryText(){
        await utils.waitForElement(this.arrearsRecoveryText)
        let value = await utils.isElementDisplayed(this.arrearsRecoveryText)
        return value
    }

    async getArrearsRecoveryText(){
        let text = await utils.getElementText(this.arrearsRecoveryText)
        return text
    }

    async isMonthNumber(){
        await utils.waitForElement(this.monthNumber)
        let value = await utils.isElementDisplayed(this.monthNumber)
        return value
    }

    async getMonthNumber(){
        let text = await utils.getElementText(this.monthNumber)
        return text
    }

    async isMonthsText(){
        await utils.waitForElement(this.monthsText)
        let value = await utils.isElementDisplayed(this.monthsText)
        return value
    }

    async getMonthsText(){
        let text = await utils.getElementText(this.monthsText)
        return text
    }

    async isFirstInstallmentAmount(){
        await utils.waitForElement(this.firstInstallmentAmount)
        let value = await utils.isElementDisplayed(this.firstInstallmentAmount)
        return value
    }

    async getFirstInstallmentAmount(){
        let text = await utils.getElementText(this.firstInstallmentAmount)
        return text
    }
    
    async isFirstInstallmentMonth(){
        await utils.waitForElement(this.firstInstallmentMonth)
        let value = await utils.isElementDisplayed(this.firstInstallmentMonth)
        return value
    }

    async getFirstInstallmentMonth(){
        let text = await utils.getElementText(this.firstInstallmentMonth)
        return text
    }
    
    async isLastInstallmentAmount(){
        await utils.waitForElement(this.lastInstallmentAmount)
        let value = await utils.isElementDisplayed(this.lastInstallmentAmount)
        return value
    }

    async getLastInstallmentAmount(){
        let text = await utils.getElementText(this.lastInstallmentAmount)
        return text
    }

    async isLastInstallmentMonth(){
        await utils.waitForElement(this.lastInstallmentMonth)
        let value = await utils.isElementDisplayed(this.lastInstallmentMonth)
        return value
    }

    async getLastInstallmentMonth(){
        let text = await utils.getElementText(this.lastInstallmentMonth)
        return text
    }

    async isInstallmentArrearsRecovery(){
        await utils.waitForElement(this.installmentText)
        let value = await utils.isElementDisplayed(this.installmentText)
        return value
    }

    async getInstallmentArrearsRecovery(){
        let text = await utils.getElementText(this.installmentText)
        return text
    }

    async isOpenToBuyRand(){
        await utils.waitForElement(this.openToBuyRand)
        let value = await utils.isElementDisplayed(this.openToBuyRand)
        return value
    }

    async getOpenToBuyRand(){
        let text = await utils.getElementText(this.openToBuyRand)
        return text
    }
    
    async isArrearsClearedRand(){
        await utils.waitForElement(this.arrearsClearedRand)
        let value = await utils.isElementDisplayed(this.arrearsClearedRand)
        return value
    }

    async getArrearsClearedRand(){
        let text = await utils.getElementText(this.arrearsClearedRand)
        return text
    }
    
    async isPositiveBureauIconArrears(){
        await utils.waitForElement(this.positiveBureauIconArrears)
        let value = await utils.isElementDisplayed(this.positiveBureauIconArrears)
        return value
    }

    async getPositiveBureauIconArrears(){
        let text = await utils.getElementText(this.positiveBureauIconArrears)
        return text
    }

    async isPartialReliefText(){
        await utils.waitForElement(this.partialReliefText)
        let value = await utils.isElementDisplayed(this.partialReliefText)
        return value
    }

    async getPartialReliefText(){
        let text = await utils.getElementText(this.partialReliefText)
        return text
    }

    async isPartialReliefMonth(){
        await utils.waitForElement(this.partialReliefMonth)
        let value = await utils.isElementDisplayed(this.partialReliefMonth)
        return value
    }

    async getPartialReliefMonth(){
        let text = await utils.getElementText(this.partialReliefMonth)
        return text
    }

    async isFirstInstallmentRand(){
        await utils.waitForElement(this.firstInstallmentRand)
        let value = await utils.isElementDisplayed(this.firstInstallmentRand)
        return value
    }

    async getFirstInstallmentRand(){
        let text = await utils.getElementText(this.firstInstallmentRand)
        return text
    }

    async isFirstInstallmentPartialReliefRand(){
        await utils.waitForElement(this.firstInstallmentPartialReliefRand)
        let value = await utils.isElementDisplayed(this.firstInstallmentPartialReliefRand)
        return value
    }

    async getFirstInstallmentPartialReliefRand(){
        let text = await utils.getElementText(this.firstInstallmentPartialReliefRand)
        return text
    }

    async isFirstInstallmentPartialReliefMonth(){
        await utils.waitForElement(this.firstInstallmentPartialReliefMonth)
        let value = await utils.isElementDisplayed(this.firstInstallmentPartialReliefMonth)
        return value
    }

    async getFirstInstallmentPartialReliefMonth(){
        let text = await utils.getElementText(this.firstInstallmentPartialReliefMonth)
        return text
    }
    
    async isLastInstallmentPartialReliefRand(){
        await utils.waitForElement(this.lastInstallmentPartialReliefRand)
        let value = await utils.isElementDisplayed(this.lastInstallmentPartialReliefRand)
        return value
    }

    async getLastInstallmentPartialReliefRand(){
        let text = await utils.getElementText(this.lastInstallmentPartialReliefRand)
        return text
    }
    
    async isLastInstallmentPartialReliefMonth(){
        await utils.waitForElement(this.lastInstallmentPartialReliefMonth)
        let value = await utils.isElementDisplayed(this.lastInstallmentPartialReliefMonth)
        return value
    }

    async getLastInstallmentPartialReliefMonth(){
        let text = await utils.getElementText(this.lastInstallmentPartialReliefMonth)
        return text
    }

    async isInstallmentMonth(){
        await utils.waitForElement(this.installmentMonth)
        let value = await utils.isElementDisplayed(this.installmentMonth)
        return value
    }

    async getInstallmentMonth(){
        let text = await utils.getElementText(this.installmentMonth)
        return text
    }
    
    async isPartialReliefOpenToBuyRand(){
        await utils.waitForElement(this.PartialReliefOpenToBuyRand)
        let value = await utils.isElementDisplayed(this.PartialReliefOpenToBuyRand)
        return value
    }

    async getPartialReliefOpenToBuyRand(){
        let text = await utils.getElementText(this.PartialReliefOpenToBuyRand)
        return text
    }

    async isPartialReliefArrearsCleared(){
        await utils.waitForElement(this.PartialReliefArrearsCleared)
        let value = await utils.isElementDisplayed(this.PartialReliefArrearsCleared)
        return value
    }

    async getPartialReliefArrearsCleared(){
        let text = await utils.getElementText(this.PartialReliefArrearsCleared)
        return text
    }

    async isPartialReliefPositiveBureauIcon(){
        await utils.waitForElement(this.partialReliefPositiveBureauIcon)
        let value = await utils.isElementDisplayed(this.partialReliefPositiveBureauIcon)
        return value
    }

    async isFlexiblePaymentArrangementPlanButton(){
        await utils.waitForElement(this.flexiblePaymentArrangementPlanButton)
        let value = await utils.isElementDisplayed(this.flexiblePaymentArrangementPlanButton)
        return value
    }

    async getFlexiblePaymentArrangementPlanButton(){
        let text = await utils.getElementText(this.flexiblePaymentArrangementPlanButton)
        return text
    }

    async isNewPlansList(){
        let value = await utils.isElementDisplayed(this.newPlansList)
        return value
    }

    async isNewPlanTab(){
        let value = await utils.isElementDisplayed(this.newPlansTab)
        return value
    }

    async clickNewPlanTab(){
        await utils.clickElement(this.newPlansTab)
    }

    async isNewPlanText(){
        let text = await utils.getElementText(this.newPlansText)
        return text
    }

    async isCurrentPlanLabelText(){
        let value = await utils.isElementDisplayed(this.currentPlanLabelText)
        return value
    }

    async getCurrentPlanLabelText(){
        let text = await utils.getElementText(this.currentPlanLabelText)
        return text
    }

    async isCurrentPlanStatusText(){
        let value = await utils.isElementDisplayed(this.currentPlanStatusText)
        return value
    }

    async getCurrentPlanStatusText(){
        let text = await utils.getElementText(this.currentPlanStatusText)
        return text
    }

    async isPlanNameLabelText(){
        let value = await utils.isElementDisplayed(this.planNameLabelText)
        return value
    }

    async getPlanNameLabelText(){
        let text = await utils.getElementText(this.planNameLabelText)
        return text
    }

    async isNewPlansTab(){
        let value = await utils.isElementDisplayed(this.newPlansTab)
        return value
    }

    async clickNewPlansTab(){
        await utils.waitForElement(this.newPlansTab)
        await utils.clickElement(this.newPlansTab)
    }

    async isNewPlansText(){
        let value = await utils.isElementDisplayed(this.newPlansText)
        return value
    }

    async getNewPlansText(){
        let text = await utils.getElementText(this.newPlansText)
        return text
    }

    async clickCurrentPlanTab(){
        await utils.clickElement(this.currentPlanText)
    }

}
export default new paymentPlans()