import { util } from "chai"
import objects from "../properties/planDescription.json" with {type: "json"}
import utils from "../utilities/util.js"
import page from "./page.js"

class planDescription{

    get arrearRecovery_css(){
        return $(objects.arrearRecovery_css)
    }
    get arrearsRecovery_txt(){
        return $(objects.arrearsRecovery_txt)
    }
    get close_img(){
        return $(objects.close_img)
    }
    get monthlyInstalments_txt(){
        return $(objects.monthlyInstalments_txt)
    }
    get monthlyInstallments1(){
        return $(objects.monthlyInstalments.monthlyInstallments1)
    }
    get monthlyInstalments1_date(){
        return $(objects.monthlyInstalments.monthlyInstalments1_date)
    }
    get monthlyInstalments1_amount(){
        return $(objects.monthlyInstalments.monthlyInstalments1_amount)
    }
    get monthlyInstallments2(){
        return $(objects.monthlyInstalments.monthlyInstallments2)
    }
    get monthlyInstalments2_date(){
        return $(objects.monthlyInstalments.monthlyInstalments2_date)
    }
    get monthlyInstalments2_amount(){
        return $(objects.monthlyInstalments.monthlyInstalments2_amount)
    }
    get monthlyInstallments3(){
        return $(objects.monthlyInstalments.monthlyInstallments3)
    }
    get monthlyInstalments3_date(){
        return $(objects.monthlyInstalments.monthlyInstalments3_date)
    }
    get monthlyInstalments3_amount(){
        return $(objects.monthlyInstalments.monthlyInstalments3_amount)
    }
    get planDescription_header(){
        return $(objects.planDescription_header)
    }
    get planDescription_txt(){
        return $(objects.planDescription_txt)
    }
    get pd_firstInstallment(){
        return $(objects.plan_description.pd_firstInstallment)
    }
    get pd_firstInstallment_txt(){
        return $(objects.plan_description.pd_firstInstallment_txt)
    }
    get pd_firstInstallment_amount(){
        return $(objects.plan_description.pd_firstInstallment_amount)
    }
    get pd_lastInstallment(){
        return $(objects.plan_description.pd_lastInstallment)
    }
    get pd_lastInstallment_txt(){
        return $(objects.plan_description.pd_lastInstallment_txt)
    }
    get pd_lastInstallment_amount(){
        return $(objects.plan_description.pd_lastInstallment_amount)
    }
    get openToBuy(){
        return $(objects.plan_description.openToBuy)
    }
    get openToBuy_txt(){
        return $(objects.plan_description.openToBuy_txt)
    }
    get openToBuy_amount(){
        return $(objects.plan_description.openToBuy_amount)
    }
    get arrearAmountCleared(){
        return $(objects.plan_description.arrearAmountCleared)
    }
    get arrearAmountCleared_txt(){
        return $(objects.plan_description.arrearAmountCleared_txt)
    }
    get arrearAmountCleared_amount(){
        return $(objects.plan_description.arrearAmountCleared_amount)
    }
    get reliefPeriod(){
        return $(objects.plan_description.reliefPeriod)
    }
    get reliefPeriod_amount(){
        return $(objects.plan_description.reliefPeriod_amount)
    }
    get reliefPeriod_txt(){
        return $(objects.plan_description.reliefPeriod_txt)
    }
    get planDuration(){
        return $(objects.plan_description.planDuration)
    }
    get planDuration_txt(){
        return $(objects.plan_description.planDuration_txt)
    }
    get planDuration_amount(){
        return $(objects.plan_description.planDuration_amount)
    }
    get numberOfInstallments(){
        return $(objects.plan_description.numberOfInstallments)
    }


    async isArrearsRecoveryDisplayed(){
        let element = await utils.isElementDisplayed(this.arrearRecovery_css)
        return element
    }
    async isArrearsRecoveryTextDisplayed(){
        let element = await utils.isElementDisplayed(this.arrearsRecovery_txt)
        return element
    }
    async get_arrearsRecovery_txt(){
        let elementText = await utils.getElementText(this.arrearsRecovery_txt)
        return elementText
    }
    async is_close_img_Displayed(){
        let element = await utils.isElementDisplayed(this.close_img)
        return element
    }
    async is_monthlyInstalments_txt_Displayed(){
        let element = await utils.isElementDisplayed(this.monthlyInstalments_txt)
        return element
    }
    async get_monthlyInstalments_txt_txt(){
        let elementText = await utils.getElementText(this.monthlyInstalments_txt)
        return elementText
    }
    
    async is_monthlyInstallments1_Displayed(){
        let element = await utils.isElementDisplayed(this.monthlyInstallments1)
        return element
    }
  
    
    async is_monthlyInstalments1_date_Displayed(){
        let element = await utils.isElementDisplayed(this.monthlyInstalments1_date)
        return element
    }
    async get_monthlyInstalments1_date_txt(){
        let elementText = await utils.getElementText(this.monthlyInstalments1_date)
        return elementText
    }

    
    async is_monthlyInstalments1_amount_Displayed(){
        let element = await utils.isElementDisplayed(this.monthlyInstalments1_amount)
        return element
    }
    async get_monthlyInstalments1_amount_txt(){
        let elementText = await utils.getElementText(this.monthlyInstalments1_amount)
        return elementText
    }

    
    async is_monthlyInstallments2_Displayed(){
        let element = await utils.isElementDisplayed(this.monthlyInstallments2)
        return element
    }

    
    async is_monthlyInstalments2_date_Displayed(){
        let element = await utils.isElementDisplayed(this.monthlyInstalments2_date)
        return element
    }
    async get_monthlyInstalments2_date_txt(){
        let elementText = await utils.getElementText(this.monthlyInstalments2_date)
        return elementText
    }

    
    async is_monthlyInstalments2_amount_Displayed(){
        let element = await utils.isElementDisplayed(this.monthlyInstalments2_amount)
        return element
    }
    async get_monthlyInstalments2_amount_txt(){
        let elementText = await utils.getElementText(this.monthlyInstalments2_amount)
        return elementText
    }

    async is_monthlyInstallments3_Displayed(){
        let element = await utils.isElementDisplayed(this.monthlyInstallments3)
        return element
    }
      
    async is_monthlyInstalments3_date_Displayed(){
        let element = await utils.isElementDisplayed(this.monthlyInstalments3_date)
        return element
    }
    async get_monthlyInstalments3_date_txt(){
        let elementText = await utils.getElementText(this.monthlyInstalments3_date)
        return elementText
    }
    async is_monthlyInstalments3_amount_Displayed(){
        let element = await utils.isElementDisplayed(this.monthlyInstalments3_amount)
        return element
    }
    async get_monthlyInstalments3_amount_txt(){
        let elementText = await utils.getElementText(this.monthlyInstalments3_amount)
        return elementText
    }
    async is_planDescription_header_Displayed(){
        let element = await utils.isElementDisplayed(this.planDescription_header)
        return element
    }
    async get_planDescription_header_txt(){
        let elementText = await utils.getElementText(this.planDescription_header)
        return elementText
    }

    async is_planDescription_txt_Displayed(){
        let element = await utils.isElementDisplayed(this.planDescription_txt)
        return element
    }
    async get_planDescription_txt_txt(){
        let elementText = await utils.getElementText(this.planDescription_txt)
        return elementText
    }
    async is_pd_firstInstallment_Displayed(){
        let element = await utils.isElementDisplayed(this.pd_firstInstallment)
        return element
    }
    async is_pd_firstInstallment_txt_Displayed(){
        let element = await utils.isElementDisplayed(this.pd_firstInstallment_txt)
        return element
    }
    async get_pd_firstInstallment_txt_txt(){
        let elementText = await utils.getElementText(this.pd_firstInstallment_txt)
        return elementText
    }
    async is_pd_firstInstallment_amount_Displayed(){
        let element = await utils.isElementDisplayed(this.pd_firstInstallment_amount)
        return element
    }
    async get_pd_firstInstallment_amount_txt(){
        let elementText = await utils.getElementText(this.pd_firstInstallment_amount)
        return elementText
    }
    async is_pd_lastInstallment_Displayed(){
        let element = await utils.isElementDisplayed(this.pd_firstInstallment)
        return element
    }
    async is_pd_lastInstallment_txt_Displayed(){
        let element = await utils.isElementDisplayed(this.pd_lastInstallment_txt)
        return element
    }
    async get_pd_lastInstallment_txt_txt(){
        let elementText = await utils.getElementText(this.pd_lastInstallment_txt)
        return elementText
    }
    async is_pd_lastInstallment_amount_Displayed(){
        let element = await utils.isElementDisplayed(this.pd_lastInstallment_amount)
        return element
    }
    async get_pd_lastInstallment_amount_txt(){
        let elementText = await utils.getElementText(this.pd_lastInstallment_amount)
        return elementText
    }

    async is_openToBuy_Displayed(){
        let element = await utils.isElementDisplayed(this.openToBuy)
        return element
    }
   async is_openToBuy_txt_Displayed(){
        let element = await utils.isElementDisplayed(this.openToBuy_txt)
        return element
    }
    async get_openToBuy_txt_txt(){
        let elementText = await utils.getElementText(this.openToBuy_txt)
        return elementText
    } 
    async is_openToBuy_amount_Displayed(){
        let element = await utils.isElementDisplayed(this.openToBuy_amount)
        return element
    }
    async get_openToBuy_amount_txt(){
        let elementText = await utils.getElementText(this.openToBuy_amount)
        return elementText
    }
    async is_arrearAmountCleared_Displayed(){
        let element = await utils.isElementDisplayed(this.arrearAmountCleared)
        return element
    }
    async is_arrearAmountCleared_txt_Displayed(){
        let element = await utils.isElementDisplayed(this.arrearAmountCleared_txt)
        return element
    }
    async get_arrearAmountCleared_txt_txt(){
        let elementText = await utils.getElementText(this.arrearAmountCleared_txt)
        return elementText
    }
    async is_arrearAmountCleared_amount_Displayed(){
        let element = await utils.isElementDisplayed(this.arrearAmountCleared_amount)
        return element
    }
    async get_arrearAmountCleared_amount_amount_txt(){
        let elementText = await utils.getElementText(this.arrearAmountCleared_amount)
        return elementText
    }
    async is_reliefPeriod_Displayed(){
        let element = await utils.isElementDisplayed(this.reliefPeriod)
        return element
    }
    async is_reliefPeriod_txt_Displayed(){
        let element = await utils.isElementDisplayed(this.reliefPeriod_txt)
        return element
    }
    async get_reliefPeriod_txt_txt(){
        let elementText = await utils.getElementText(this.reliefPeriod_txt)
        return elementText
    }
    
    async is_reliefPeriod_amount_Displayed(){
        let element = await utils.isElementDisplayed(this.reliefPeriod_amount)
        return element
    }
    async get_reliefPeriod_amount_txt(){
        let elementText = await utils.getElementText(this.reliefPeriod_amount)
        return elementText
    }
    
    async is_planDuration_Displayed(){
        let element = await utils.isElementDisplayed(this.planDuration)
        return element
    }      
    async is_planDuration_txt_Displayed(){
        let element = await utils.isElementDisplayed(this.planDuration_txt)
        return element
    }
    async get_planDuration_txt_txt(){
        let elementText = await utils.getElementText(this.planDuration_txt)
        return elementText
    } 
    async is_planDuration_amount_Displayed(){
        let element = await utils.isElementDisplayed(this.planDuration_amount)
        return element
    }
    async get_planDuration_amount_txt(){
        let elementText = await utils.getElementText(this.planDuration_amount)
        return elementText
    }

    async is_numberOfInstallments_Displayed(){
        let element = await utils.isElementDisplayed(this.numberOfInstallments)
        return element
    }
   
    get numberOfInstallments_txt(){
        return $(objects.plan_description.numberOfInstallments_txt)
    }
    get numberOfInstallments_amount(){
        return $(objects.plan_description.numberOfInstallments_amount)
    }
    get noAdverseBureau(){
        return $(objects.plan_description.noAdverseBureau)
    }
    get noAdverseBureau_txt(){
        return $(objects.plan_description.noAdverseBureau_txt)
    }
    get noAdverseBureau_value(){
        return $(objects.plan_description.noAdverseBureau_value)
    }
    get dueDate_txt(){
        return $(objects.flexiblePaymentArrangement.dueDate_txt)
    }
    get due_Date_value(){
        return $(objects.flexiblePaymentArrangement.due_Date_value)
    }
    get takeThisPlan_btn(){
        return $(objects.flexiblePaymentArrangement.takeThisPlan_btn)
    }

    async is_numberOfInstallments_txt_Displayed(){
        let element = await utils.isElementDisplayed(this.numberOfInstallments_txt)
        return element
    }
    async get_numberOfInstallments_txt_txt(){
        let elementText = await utils.getElementText(this.numberOfInstallments_txt)
        return elementText
    }

    async is_numberOfInstallments_amount_Displayed(){
        let element = await utils.isElementDisplayed(this.numberOfInstallments_amount)
        return element
    }
    async get_numberOfInstallments_amount_txt(){
        let elementText = await utils.getElementText(this.numberOfInstallments_amount)
        return elementText
    }
    async is_noAdverseBureau_Displayed(){
        let element = await utils.isElementDisplayed(this.noAdverseBureau)
        return element
    }  
    async is_noAdverseBureau_txt_Displayed(){
        let element = await utils.isElementDisplayed(this.noAdverseBureau_txt)
        return element
    }
    async get_noAdverseBureau_txt_txt(){
        let elementText = await utils.getElementText(this.noAdverseBureau_txt)
        return elementText
    }
    async is_noAdverseBureau_value_Displayed(){
        let element = await utils.isElementDisplayed(this.noAdverseBureau_value)
        return element
    }
    async get_noAdverseBureau_value_txt(){
        let elementText = await utils.getElementText(this.noAdverseBureau_value)
        return elementText
    }
    async is_dueDate_txt_Displayed(){
        let element = await utils.isElementDisplayed(this.dueDate_txt)
        return element
    }
    async get_dueDate_txt_txt(){
        let elementText = await utils.getElementText(this.dueDate_txt)
        return elementText
    }
    async is_due_Date_value_Displayed(){
        let element = await utils.isElementDisplayed(this.due_Date_value)
        return element
    }
    async get_due_Date_value_txt(){
        let elementText = await utils.getElementText(this.due_Date_value)
        return elementText
    }
    async is_takeThisPlan_btn_Displayed(){
        let element = await utils.isElementDisplayed(this.takeThisPlan_btn)
        return element
    }
    async get_takeThisPlan_btn_txt(){
        let elementText = await utils.cli(this.takeThisPlan_btn)
        return elementText
    }


    get flexiblePaymentArrangement_btn(){
        return $(objects.flexiblePaymentArrangement.flexiblePaymentArrangement_btn)
    }

    async isDisplayed_flexiblePaymentArrangement_btn(){
        let isVisible=await utils.isElementDisplayed(this.flexiblePaymentArrangement_btn)
        return isVisible;
    }

    async click_flexiblePaymentArrangement_btn(){
        let click=await utils.clickElement(this.flexiblePaymentArrangement_btn);
        return click;
    }
    
    get flexiblePaymentArrangement_page_css(){
        return $(objects.flexiblePaymentArrangement.flexiblePaymentArrangement_page_css)
    }
    async isDisplayed_flexiblePaymentArrangement_page_css(){
        let isVisible=await utils.isElementDisplayed(this.flexiblePaymentArrangement_page_css)
        return isVisible;
    }
    
    
    get flexiblePaymentArrangement_header(){
        return $(objects.flexiblePaymentArrangement.flexiblePaymentArrangement_header)
    }
    async isDisplayed_flexiblePaymentArrangement_header(){
        let isVisible=await utils.isElementDisplayed(this.flexiblePaymentArrangement_header)
        return isVisible;
    }
    
    
    get flexiblePaymentArrangements_closebtn(){
        return $(objects.flexiblePaymentArrangement.flexiblePaymentArrangements_closebtn)
    }
    async isDisplayed_flexiblePaymentArrangements_closebtn(){
        let isVisible=await utils.isElementDisplayed(this.flexiblePaymentArrangements_closebtn)
        return isVisible;
    }
    async click_flexiblePaymentArrangements_closebtn(){
        let click=await utils.clickElement(this.flexiblePaymentArrangements_closebtn);
        return click;
    }
    
    
    get howMuchCanYouPay_txt(){
        return $(objects.flexiblePaymentArrangement.howMuchCanYouPay_txt)
    }
    async isDisplayed_howMuchCanYouPay_txt(){
        let isVisible = await utils.isElementDisplayed(this.howMuchCanYouPay_txt)
        return isVisible;
    }

    async getHowMuchCanYouPayText(){
        let value = await utils.getElementText(this.howMuchCanYouPay_txt)
        return value;
    }
    
    get howMuchCanYouPay_text_box(){
        return $(objects.flexiblePaymentArrangement.howMuchCanYouPay_text_box)
    }
    async isDisplayed_howMuchCanYouPay_text_box(){
        let isVisible=await utils.isElementDisplayed(this.howMuchCanYouPay_text_box)
        return isVisible;
    }
    async setText_howMuchCanYouPay_text_box(value){
        return await utils.setText(this.howMuchCanYouPay_text_box,value);
    }
    async clearText_howMuchCanYouPay_text_box(){
        return await utils.clearValue(this.howMuchCanYouPay_text_box);
    }
    
    
    get howMuchCanYouPay_text_box_info(){
        return $(objects.flexiblePaymentArrangement.howMuchCanYouPay_text_box_info)
    }
    async isDisplayed_howMuchCanYouPay_text_box_info(){
        let isVisible=await utils.isElementDisplayed(this.howMuchCanYouPay_text_box_info)
        return isVisible;
    }
    
    
    get firstPayment(){
        return $(objects.flexiblePaymentArrangement.firstPayment)
    }
    async isDisplayed_firstPayment(){
        let isVisible=await utils.isElementDisplayed(this.firstPayment)
        return isVisible;
    }
    
    
    
    get firstPayment_date(){
        return $(objects.flexiblePaymentArrangement.firstPayment_date)
    }
    async isDisplayed_firstPayment_date(){
        let isVisible=await utils.isElementDisplayed(this.firstPayment_date)
        return isVisible;
    }
    async getText_firstPayment_date(){
        let text= await utils.getElementText(this.firstPayment_date);
        return text;
    }
    
    
    get firstPayment_amount(){
        return $(objects.flexiblePaymentArrangement.firstPayment_amount)
    }
    async isDisplayed_firstPayment_amount(){
        let isVisible=await utils.isElementDisplayed(this.firstPayment_amount)
        return isVisible;
    }
    async getText_firstPayment_amount(){
        let text= await utils.getElementText(this.firstPayment_amount);
        return text;
    }
    
    
    get secondPayment(){
        return $(objects.flexiblePaymentArrangement.secondPayment)
    }
    async isDisplayed_secondPayment(){
        let isVisible=await utils.isElementDisplayed(this.secondPayment)
        return isVisible;
    }
    
    
    get secondPayment_date(){
        return $(objects.flexiblePaymentArrangement.secondPayment_date)
    }
    async isDisplayed_secondPayment_date(){
        let isVisible=await utils.isElementDisplayed(this.secondPayment_date)
        return isVisible;
    }
    async getText_secondPayment_date(){
        let text= await utils.getElementText(this.secondPayment_date);
        return text;
    }
    
    get secondPayment_amount(){
        return $(objects.flexiblePaymentArrangement.secondPayment_amount)
    }
    async isDisplayed_secondPayment_amount(){
        let isVisible=await utils.isElementDisplayed(this.secondPayment_amount)
        return isVisible;
    }
    async getText_secondPayment_amount(){
        let text= await utils.getElementText(this.secondPayment_amount);
        return text;
    }
    
    
    
    
    get thirdPayment(){
        return $(objects.flexiblePaymentArrangement.thirdPayment)
    }
    async isDisplayed_thirdPayment(){
        let isVisible=await utils.isElementDisplayed(this.thirdPayment)
        return isVisible;
    }
    
    
    get thirdPayment_date(){
        return $(objects.flexiblePaymentArrangement.thirdPayment_date)
    }
    async isDisplayed_thirdPayment_date(){
        let isVisible=await utils.isElementDisplayed(this.thirdPayment_date)
        return isVisible;
    }
    async getText_thirdPayment_date(){
        let text= await utils.getElementText(this.thirdPayment_date);
        return text;
    }
    
    get thirdPayment_amount(){
        return $(objects.flexiblePaymentArrangement.thirdPayment_amount)
    }
    async isDisplayed_thirdPayment_amount(){
        let isVisible=await utils.isElementDisplayed(this.thirdPayment_amount)
        return isVisible;
    }
    async getText_thirdPayment_amount(){
        let text= await utils.getElementText(this.thirdPayment_amount);
        return text;
    }
    
    
    
    get monthlyInstallment(){
        return $(objects.flexiblePaymentArrangement.monthlyInstallment)
    }
    async isDisplayed_monthlyInstallment(){
        let isVisible=await utils.isElementDisplayed(this.monthlyInstallment)
        return isVisible;
    }
    
    
    get monthlyInstallment_txt(){
        return $(objects.flexiblePaymentArrangement.monthlyInstallment_txt)
    }
    async isDisplayed_monthlyInstallment_txt(){
        let isVisible=await utils.isElementDisplayed(this.monthlyInstallment_txt)
        return isVisible;
    }
    async getText_monthlyInstallment_txt(){
        let text= await utils.getElementText(this.monthlyInstallment_txt);
        return text;
    }
    
    
    get monthlyInstallment_amount(){
        return $(objects.flexiblePaymentArrangement.monthlyInstallment_amount)
    }
    async isDisplayed_monthlyInstallment_amount(){
        let isVisible=await utils.isElementDisplayed(this.monthlyInstallment_amount)
        return isVisible;
    }
    async getText_monthlyInstallment_amount(){
        let text= await utils.getElementText(this.monthlyInstallment_amount);
        return text;
    }
    
    
    get termDuration(){
        return $(objects.flexiblePaymentArrangement.termDuration)
    }
    async isDisplayed_termDuration(){
        let isVisible=await utils.isElementDisplayed(this.termDuration)
        return isVisible;
    }
    
    
    get termDuration_txt(){
        return $(objects.flexiblePaymentArrangement.termDuration_txt)
    }
    async isDisplayed_termDuration_txt(){
        let isVisible=await utils.isElementDisplayed(this.termDuration_txt)
        return isVisible;
    }
    async getText_termDuration_txt(){
        let text= await utils.getElementText(this.termDuration_txt);
        return text;
    }
    
    get termDuration_terms(){
        return $(objects.flexiblePaymentArrangement.termDuration_terms)
    }
    async isDisplayed_termDuration_terms(){
        let isVisible=await utils.isElementDisplayed(this.termDuration_terms)
        return isVisible;
    }
    async getText_termDuration_terms(){
        let text= await utils.getElementText(this.termDuration_terms);
        return text;
    }
    
    get dueDate_txt(){
        return $(objects.flexiblePaymentArrangement.dueDate_txt)
    }
    async isDisplayed_dueDate_txt(){
        let isVisible=await utils.isElementDisplayed(this.dueDate_txt)
        return isVisible;
    }
    async getText_dueDate_txt(){
        let text= await utils.getElementText(this.dueDate_txt);
        return text;
    }
    
    get dueDate(){
        return $(objects.flexiblePaymentArrangement.dueDate)
    }
    async isDisplayed_dueDate(){
        let isVisible=await utils.isElementDisplayed(this.dueDate)
        return isVisible;
    }
    async getText_dueDate(){
        let text= await utils.getElementText(this.dueDate);
        return text;
    }
    
    
    get takeThisPlan_btn(){
        return $(objects.flexiblePaymentArrangement.takeThisPlan_btn)
    }
    async isDisplayed_takeThisPlan_btn(){
        let isVisible=await utils.isElementDisplayed(this.takeThisPlan_btn)
        return isVisible;
    }
    async click_takeThisPlan_btn(){
        return await utils.clickElement(this.takeThisPlan_btn);
        
    }
    
    



}

export default new planDescription();