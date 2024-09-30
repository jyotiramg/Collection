
import loginPage from "../pageobjects/loginPage.js"
import homePage from "../pageobjects/homePage.js"
import paymentPlans from "../pageobjects/paymentPlans.js"

import excelData from "../utilities/excel_data_driven.js";
import { expect } from "chai";

import path from 'path';
import exp from "constants";


var collectionInputData = excelData.convertToJSON(path.join(process.cwd()+ '/test/testData/collectionPortalInputData.csv'),0, 'Collectionportalsecurityquestion')

collectionInputData.forEach((testData, index)=>{


describe("Payment Plans table elements", async function(){

    it('Verify user is able to login to the application', async function(){
        await loginPage.login("collectiontest4", "12345678")
        await homePage.enterIdentityNumber("6506140374083")
        await homePage.clickSearchButton()
        expect(await homePage.isCustomerName()).to.be.true
        if(testData.product == "creditCard"){
        await homePage.clickCreditCardMenu()
        }
        if(testData.product == "personalLoan"){
        await homePage.clickPersonalLoanMenu()
        }
        if(testData.product == "storeCard"){
        await homePage.clickStoreCardMenu()
        }
    })

    it('Verify the payment plans table column headers are displayed', async function(){
        if( testData.planType == "Elite"){
            if(testData.tab == "CurrentPlan"){
                await paymentPlans.clickCurrentPlanTab();
                if(testData.currentPlan == "Yes"){
                await paymentPlans.isPlanTitleDisplayed()
                expect(await paymentPlans.getPlanTitleText()).to.contain("Elite - Settlement Plans")
                expect(await paymentPlans.isPlanNameText()).to.be.true
                expect(await paymentPlans.isBalanceOutstanding()).to.be.true
                expect(await paymentPlans.isDiscountAmount()).to.be.true
                expect(await paymentPlans.isMonthlyInstallment()).to.be.true
                expect(await paymentPlans.isSettlementAmount()).to.be.true
                expect(await paymentPlans.isCreateCustomPlanButton()).to.be.true
                await paymentPlans.clickCreateCustomPlanButton()
                }
                if(testData.currentPlan == "No"){
                await paymentPlans.isPlanTitleDisplayed()
                expect(await paymentPlans.getPlanTitleText()).to.contain("Elite - Settlement Plans")
                expect(await paymentPlans.isPlanNameText()).to.be.false
                expect(await paymentPlans.isBalanceOutstanding()).to.be.false
                expect(await paymentPlans.isDiscountAmount()).to.be.false
                expect(await paymentPlans.isMonthlyInstallment()).to.be.false
                expect(await paymentPlans.isSettlementAmount()).to.be.false
                expect(await paymentPlans.isCreateCustomPlanButton()).to.be.false
                }
            }
            if(testData.tab == "NewPlan"){
                await paymentPlans.clickNewPlanTab();
                await paymentPlans.isPlanTitleDisplayed()
                expect(await paymentPlans.getPlanTitleText()).to.contain("Elite - Settlement Plans")
                expect(await paymentPlans.isPlanNameText()).to.be.true
                expect(await paymentPlans.isBalanceOutstanding()).to.be.true
                expect(await paymentPlans.isDiscountAmount()).to.be.true
                expect(await paymentPlans.isMonthlyInstallment()).to.be.true
                expect(await paymentPlans.isSettlementAmount()).to.be.true
                expect(await paymentPlans.isCreateCustomPlanButton()).to.be.true
                await paymentPlans.clickCreateCustomPlanButton()

            }
        }
        else if(testData.planType == "VIP"){
            await paymentPlans.isPlanTitleDisplayed()
            expect(await paymentPlans.getPlanTitleText()).to.contain("")
            expect(await paymentPlans.isPlanNameText()).to.be.true
            expect(await paymentPlans.getPlanNameText()).to.contain("Plan Name")
            expect(await paymentPlans.isFirstInstallmentText()).to.be.true
            expect(await paymentPlans.getFirstInstallmentText()).to.contain("First Instalment")
            expect(await paymentPlans.isLastInstallmentText()).to.be.true
            expect(await paymentPlans.getLastInstallmentText()).to.contain("Last Instalment")
            expect(await paymentPlans.isInstallmentText()).to.be.true
            expect(await paymentPlans.getInstallmentText()).to.contain("Instalments")
            expect(await paymentPlans.isOpenToBuyText()).to.be.true
            expect(await paymentPlans.getOpenToBuyText()).to.contain("Open To Buy")
            expect(await paymentPlans.isArrearsClearedText()).to.be.true
            expect(await paymentPlans.getArrearsClearedText()).to.contain("Arrears Cleared")
            expect(await paymentPlans.isPositiveBureau()).to.be.true
            expect(await paymentPlans.getPositiveBureau()).to.contain("Positive Bureau")
            expect(await paymentPlans.isNewPlansList()).to.be.true
            it('Verify the payment plan details are displayed in the table', async function(){
                expect(await paymentPlans.isArrearsRecoveryText()).to.be.true
                expect(await paymentPlans.getArrearsRecoveryText()).to.contain("Arrears Recovery")
                expect(await paymentPlans.isMonthNumber()).to.be.true
                expect(await paymentPlans.getMonthNumber()).to.contain("")
                expect(await paymentPlans.isFirstInstallmentAmount()).to.be.true
                expect(await paymentPlans.getFirstInstallmentAmount()).to.contain("")
                expect(await paymentPlans.isFirstInstallmentMonth()).to.be.true
                expect(await paymentPlans.getFirstInstallmentMonth()).to.contain("")
                expect(await paymentPlans.isLastInstallmentAmount()).to.be.true
                expect(await paymentPlans.getLastInstallmentAmount()).to.contain("")
                expect(await paymentPlans.isLastInstallmentMonth()).to.be.true
                expect(await paymentPlans.getLastInstallmentMonth()).to.contain("")
                expect(await paymentPlans.isInstallmentArrearsRecovery()).to.be.true
                expect(await paymentPlans.getInstallmentArrearsRecovery()).to.contain("")
                expect(await paymentPlans.isOpenToBuyText()).to.be.true
                expect(await paymentPlans.getOpenToBuyText()).to.contain("")
                expect(await paymentPlans.isOpenToBuyRand()).to.be.true
                expect(await paymentPlans.getOpenToBuyRand()).to.contain("")
                expect(await paymentPlans.isArrearsClearedRand()).to.be.true
                expect(await paymentPlans.getArrearsClearedRand()).to.contain("")
                expect(await paymentPlans.isPositiveBureau()).to.be.true()
                expect(await paymentPlans.isFlexiblePaymentArrangementPlanButton()).to.be.true
                expect(await paymentPlans.getFlexiblePaymentArrangementPlanButton()).to.contain("")
                expect(await paymentPlans.isPartialReliefText()).to.be.true
                expect(await paymentPlans.getPartialReliefText()).to.contain("")
                expect(await paymentPlans.isPartialReliefMonth()).to.be.true
                expect(await paymentPlans.getPartialReliefMonth()).to.contain("")
                expect(await paymentPlans.isFirstInstallmentPartialReliefMonth()).to.be.true
                expect(await paymentPlans.getFirstInstallmentPartialReliefMonth()).to.contain("")
                expect(await paymentPlans.isFirstInstallmentPartialReliefRand()).to.be.true
                expect(await paymentPlans.getFirstInstallmentPartialReliefRand()).to.contain("")
                expect(await paymentPlans.isLastInstallmentPartialReliefMonth()).to.be.true
                expect(await paymentPlans.getLastInstallmentPartialReliefMonth()).to.contain("")
                expect(await paymentPlans.isLastInstallmentPartialReliefRand()).to.be.true
                expect(await paymentPlans.getLastInstallmentPartialReliefRand()).to.contain("")
                expect(await paymentPlans.isInstallmentsText()).to.be.true
                expect(await paymentPlans.getInstallmentsText()).to.contain("")
                expect(await paymentPlans.isPartialReliefMonth()).to.be.true
                expect(await paymentPlans.getPartialReliefOpenToBuyRand()).to.contain("")
                expect(await paymentPlans.isPartialReliefArrearsCleared()).to.be.true
                expect(await paymentPlans.getPartialReliefArrearsCleared()).to.contain("")
                expect(await paymentPlans.isPartialReliefPositiveBureauIcon()).to.be.true
            })

        }
    })

   

})

})