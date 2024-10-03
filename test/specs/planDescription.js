import loginPage from "../pageobjects/loginPage.js"
import homePage from "../pageobjects/homePage.js"
import { expect } from "chai"
import path from 'path'
import paymentPlans from "../pageobjects/paymentPlans.js"
import planDescription from "../pageobjects/planDescription.js"
import exceldata from "../utilities/excel_data_driven.js"

var collectionInputData = exceldata.convertToJSON(path.join(process.cwd() + '/test/testData/collectionPortalInputData.csv'),0, 'CollectionPortalPlanDescription' )

if (!Array.isArray(collectionInputData)) {
    throw new Error('collectionInputData is not an array ------------');
}

console.log("collectionInputData" + collectionInputData)
collectionInputData.forEach((testData, index)=>{

describe('plan description page validation', async function() {

    it('Verify user is able to login to the application', async function(){
        await loginPage.login(testData.UserName, testData.Password)
        await homePage.enterIdentityNumber(testData.identityNumber)
        await homePage.clickSearchButton()
        expect(await homePage.isCustomerName()).to.be.true 
        if(testData.product == "creditCard"){
            await homePage.clickCreditCardMenu()
            }
           else if(testData.product == "personalLoan"){
              console.log("Before clicking the personal Loan.......................")
            await homePage.clickPersonalLoanMenu()
            console.log("After click ..............................................")
            }
            else if(testData.product == "storeCard"){
            await homePage.clickStoreCardMenu()
            }
            console.log("outside the ifffffffffffff")
            it('Verify plan description details are displayed in the plan description screen', async function(){
              console.log("inside nested if####################")
              if(testData.planType == "VIP"){
                console.log("before clicing the new plans tab!!!!!!!!!!!!!!!!!!!")
                await paymentPlans.clickNewPlansTab()
                console.log("After clicking the new plans tab__________________")
                if(testData.plan == "ArrearsRecovery"){
                  console.log("Inside the Arrears Recovery!!!!!!!!!!!!!!!!")
                    await paymentPlans.clickArrearsRecoveryLink()
                    await planDescription.isArrearsRecoveryDisplayed()
                    await planDescription.isArrearsRecoveryTextDisplayed();
                    expect(planDescription.get_arrearsRecovery_txt()).to.contain("Arrears Recovery")
                    await planDescription.is_close_img_Displayed();
                    await planDescription.is_monthlyInstalments_txt_Displayed();
                    expect(await planDescription.get_monthlyInstalments_txt_txt()).to.contain("Monthly Instalments")
                    await planDescription.is_monthlyInstallments1_Displayed();
                    await planDescription.is_monthlyInstalments1_date_Displayed();
                    await planDescription.is_monthlyInstalments1_amount_Displayed();
                    expect(await planDescription.get_monthlyInstalments1_date_txt()).to.contain(installment1Date)
                    expect(await planDescription.get_monthlyInstalments1_amount_txt()).to.contain(installment1Amount)
                    expect(await planDescription.is_monthlyInstallments2_Displayed()).to.be.true
                    expect(await planDescription.is_monthlyInstalments2_date_Displayed()).to.be.true
                    expect(await planDescription.is_monthlyInstalments2_amount_Displayed()).to.be.true
                    expect(await planDescription.get_monthlyInstalments2_date_txt()).to.contain(installment2Date)
                    expect(await planDescription.get_monthlyInstalments2_amount_txt()).to.contain(installment2Amount)
                    expect(await planDescription.is_monthlyInstallments3_Displayed()).to.be.true
                    expect(await planDescription.is_monthlyInstalments3_date_Displayed()).to.be.true
                    expect(await planDescription.is_monthlyInstalments3_amount_Displayed()).to.be.true
                    expect(await planDescription.get_monthlyInstalments3_date_txt()).to.contain(installment3Date)
                    expect(await planDescription.get_monthlyInstalments3_amount_txt()).to.contain(installment3Amount)                
                
              it('Verify the plan description details in the plan Description', async function(){
                    expect(await planDescription.is_planDescription_header_Displayed()).to.be.true
                    expect(await planDescription.is_planDescription_txt_Displayed()).to.be.true
                    expect(await planDescription.get_planDescription_header_txt()).to.contain(planDescriptionHeaderText)
                    expect(await planDescription.get_planDescription_txt_txt()).to.contain(planDescriptionText)
                    expect(await planDescription.is_pd_firstInstallment_Displayed()).to.be.true
                    expect(await planDescription.get_pd_firstInstallment_txt_txt()).to.contain("First Installment") 
                    expect(await planDescription.get_pd_firstInstallment_amount_txt()).to.contain("")
                    expect(await planDescription.is_pd_lastInstallment_Displayed()).to.be.true
                    expect(await planDescription.get_pd_lastInstallment_txt_txt()).to.contain("")
                    expect(await planDescription.is_pd_lastInstallment_txt_Displayed()).to.be.true
                    expect(await planDescription.is_pd_lastInstallment_amount_Displayed()).to.be.true
                    expect(await planDescription.get_pd_lastInstallment_amount_txt()).to.contain("")
                    expect(await planDescription.is_openToBuy_Displayed()).to.be.true
                    expect(await planDescription.get_openToBuy_txt_txt()).to.contain("")
                    expect(await planDescription.is_openToBuy_amount_Displayed()).to.be.true
                    expect(await planDescription.get_openToBuy_amount_txt()).to.contain("")
                    expect(await planDescription.is_arrearAmountCleared_Displayed()).to.be.true
                    expect(await planDescription.get_arrearAmountCleared_txt_txt()).to.contain("")
                    expect(await planDescription.is_arrearAmountCleared_amount_Displayed()).to.be.true
                    expect(await planDescription.get_arrearAmountCleared_amount_amount_txt()).to.contain("")
                    expect(await planDescription.is_reliefPeriod_Displayed()).to.be.true
                    expect(await planDescription.get_reliefPeriod_txt_txt()).to.contain("")
                    expect(await planDescription.is_reliefPeriod_amount_Displayed()).to.be.true
                    expect(await planDescription.get_reliefPeriod_amount_txt()).to.contain("")
                    expect(await planDescription.is_planDuration_Displayed()).to.be.true
                    expect(await planDescription.is_planDuration_txt_Displayed()).to.be.true
                    expect(await planDescription.get_planDuration_txt_txt()).to.contain("")
                    expect(await planDescription.is_planDuration_amount_Displayed()).to.be.true
                    expect(await planDescription.get_planDuration_amount_txt()).to.contain("")
                    expect(await planDescription.is_numberOfInstallments_Displayed()).to.be.true
                    expect(await planDescription.get_numberOfInstallments_txt_txt()).to.contain("")
                    expect(await planDescription.is_numberOfInstallments_amount_Displayed()).to.be.true
                    expect(await planDescription.get_numberOfInstallments_amount_txt()).to.contain("")
                    expect(await planDescription.is_noAdverseBureau_Displayed()).to.be.true
                    expect(await planDescription.get_noAdverseBureau_txt_txt()).to.contain("")
                    expect(await planDescription.is_noAdverseBureau_value_Displayed()).to.be.true
                    expect(await planDescription.is_dueDate_txt_Displayed()).to.be.true
                    expect(await planDescription.get_dueDate_txt_txt()).to.contain("")
                    expect(await planDescription.is_due_Date_value_Displayed()).to.be.true
                    expect(await planDescription.get_due_Date_value_txt()).to.contain("")
                    expect(await planDescription.is_takeThisPlan_btn_Displayed()).to.be.true
                    expect(await planDescription.get_takeThisPlan_btn_txt()).to.contain("")
              })
                }
                if(testData.plan == "FlexiblePaymentArrangement"){
                  it('Verify the plan descripion details of flexible payment arrangement screen', async function() {
                    if(testData.planType == "Flexible Payment Arrangement"){
                      await paymentPlans.isFlexiblePaymentArrangementPlanButton()
                      await paymentPlans.clickFlexiblePaymentArrangementPlanButton()
                      expect(await planDescription.isDisplayed_flexiblePaymentArrangement_header()).to.be.true
                      expect(await planDescription.isDisplayed_flexiblePaymentArrangements_closebtn()).to.be.true
                      expect(await planDescription.isDisplayed_howMuchCanYouPay_txt()).to.be.true
                      expect(await planDescription.isDisplayed_howMuchCanYouPay_text_box()).to.be.true
                      expect(await planDescription.isDisplayed_howMuchCanYouPay_text_box_info()).to.be.true
                      expect(await planDescription.isDisplayed_monthlyInstallment()).to.be.true
                      expect(await planDescription.getHowMuchCanYouPayText()).to.contain("")
                      expect(await planDescription.isDisplayed_firstPayment()).to.be.true
                      expect(await planDescription.getText_firstPayment_date()).to.contain("")
                      expect(await planDescription.isDisplayed_firstPayment_amount()).to.be.true
                      expect(await planDescription.isDisplayed_secondPayment()).to.be.true
                      expect(await planDescription.getText_secondPayment_date()).to.contain("")
                      expect(await planDescription.isDisplayed_secondPayment_amount()).to.be.true
                      expect(await planDescription.getText_secondPayment_amount()).to.contain("")
                      expect(await planDescription.isDisplayed_thirdPayment()).to.be.true
                      expect(await planDescription.isDisplayed_thirdPayment_date()).to.be.true
                      expect(await planDescription.isDisplayed_thirdPayment_amount()).to.be.true
                      expect(await planDescription.getText_thirdPayment_amount()).to.contain("")
                      expect(await planDescription.getText_thirdPayment_date()).to.contain("")
                      expect(await planDescription.isDisplayed_monthlyInstallment()).to.be.true
                      expect(await planDescription.getText_monthlyInstallment_txt()).to.contain("")
                      expect(await planDescription.isDisplayed_monthlyInstallment_txt()).to.be.true
                      expect(await planDescription.isDisplayed_monthlyInstallment_amount()).to.be.true
                      expect(await planDescription.getText_monthlyInstallment_amount()).to.contain("")
                      expect(await planDescription.isDisplayed_termDuration_txt()).to.be.true
                      expect(await planDescription.isDisplayed_termDuration_terms()).to.be.true
                      expect(await planDescription.is_dueDate_txt_Displayed()).to.be.true
                      expect(await planDescription.getText_dueDate_txt()).to.contain("")
                      expect(await planDescription.isDisplayed_dueDate()).to.be.true
                      expect(await planDescription.getText_dueDate()).to.contain("")
                      //expect(await planDescription.is_takeThisPlan_btn_Displayed()).to.be.true
                      expect(await planDescription.get_takeThisPlan_btn_txt()).to.contain("")
                      expect(await planDescription.isDisplayed_takeThisPlan_btn()).to.be.true
                      
                    }
                  })

                  }
                

            }                
            })
           
    })
    
})

})