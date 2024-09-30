class utils {
    // function is used to display outline in the element
  
    async setoutline_selectedelement(value) {
      await browser.execute((elementwithpass) => {
        var element = elementwithpass.split(",");
  
        if (element[1].toString() === "Pass") {
          document.querySelector(element[0]).style.outline = "3px groove #6ECB63";
        } else if (element[1].toString() === "Fail") {
          document.querySelector(element[0]).style.outline =
            "2.5px solid #F90716";
        } else if (element[1].toString() === "Error") {
          document.querySelector(element[0]).style.outline =
            "2.5px ridge #FFCA03";
        }
      }, value);
      return "true";
    }
  
    async setoutline_selectedelement1(element, value) {
      browser.execute(
        (element, value) => {
          //   var element = elementwithpass.split(",")
          if (value.toString() === "Pass") {
            document.querySelector(element).style.outline = "3px groove #6ECB63";
          } else if (value.toString() === "Fail") {
            document.querySelector(element).style.outline = "2.5px solid #F90716";
          } else if (value.toString() === "Error") {
            document.querySelector(element).style.outline = "2.5px ridge #FFCA03";
          }
        },
        element,
        value
      );
      return "true";
    }
  
    // function is used to display outline in the element
  
    async clearoutline_selectedelement(value) {
      await browser.execute((element) => {
        document.querySelector(element).style.outline = "none";
      }, value);
    }
  
    async isElementDisplayed(element) {
      console.log(typeof element + "!!!!!!!!!!!!!!!!!!!!!!!"); 
      return await (await element).isDisplayed();
    }
  
    async isRadioBtnSelected(element) {
      return await (await element).isSelected();
    }
  
    async scrollToElement(element) {
      // const element = $('#yourElement');
      const location = (await element).getLocation();
      browser.executeScript(`window.scrollTo(arguments[0], arguments[1]);`, [
        (await location).x,
        (await location).y,
      ]);
      // (await element).scrollIntoView()
    }
  
    async setText(element, text) {
      await element.setValue(text);
    }
  
    async getElementText(element) {
      return await (await element).getText();
    }
  
    async getAttributeValue(element){
      return await element.getAttribute("value")
    }
  
    async getElementsText(elements) {
      // Initialize an array to store the text values
      const elementTexts = [];
      // Iterate through each element and store its text in the array
      for (const element of elements) {
        const text = element.getText();
        elementTexts.push(text);
      }
      return elementTexts;
    }
  
    async clickElement(element) {
      await (await element).click();
    }
  
    async clearValue(element) {
      return await (await element).clearValue();
    }
  
    async selectDropDownDate(
      monthElement,
      yearElement,
      dateElement,
      month,
      year,
      date
    ) {
      await (await monthElement).selectByVisibleText(month);
      await (await yearElement).selectByVisibleText(year);
      await (await dateElement).selectByVisibleText(date).click();
    }
  
    async selectDropDown(elements, value) {
      let element = await elements;
      for (let i = 0; i < element.length; i++) {
        let elem = await element[i].getAttribute("value");
        if (elem === value) {
          await element[i].click();
          break;
        }
      }
    }
  
    async selectVisibleText(element, text) {
      await (await element).selectByVisibleText(text);
    }
  
    async waitForElement(el) {
      await browser.waitUntil(
        async function () {
          return (await el).isDisplayed();
        },
        {
          timeout: 80000,
          timeoutMsg: (await el) + "is not displayed",
          interval: 500,
        }
      );
    }
  
    async elementDisplayed(el) {
      try {
        await browser.waitUntil(
          async function () {
            return (await el).isDisplayed();
          },
          {
            timeout: 50000,
            timeoutMsg: (await el) + "is not displayed",
            interval: 500,
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  
    // await waitForElementClickable(){
  
    // }
  
    async waitForElements(el) {
      await browser.waitUntil(
        function () {
          return el;
        },
        {
          timeout: 90000,
        }
      );
    }
  
    async waitForElementReverse(el) {
      //const resolvedElement = await el;
      // await browser.pause(5000)
      (await el).waitForDisplayed({
        timeout: 120000,
        timeoutMsg: "success message is still displayed",
        reverse: true,
        interval: 500,
      });
    }
  
    async elementClickable(el) {
      await browser.waitUntil(
        async function () {
          return (await el).isClickable();
        },
        {
          timeout: 90000,
          timeoutMsg: `Element not displayed within 90000 ms`,
          interval: 500,
        }
      );
    }
  
    async isElementsDisplayed() {}
  
    async navigateTo(path) {
      await browser.url(path);
      // await browser.maximizeWindow()
    }
    async getHiddenLabelText(selector) {
      const labelInnerText = await browser.execute((selector) => {
        const labelElement = document.querySelector(selector);
        return labelElement ? labelElement.getAttribute("textContent") : "";
      }, selector);
  
      return labelInnerText;
    }
  
    async getElements(element) {
      return await $$(element);
    }
  
    async isElementClickable(element) {
      return (await element).isClickable();
    }
  
    async isElementEnabled(element) {
      return await element;
    }
  }
  
  export default new utils();
  