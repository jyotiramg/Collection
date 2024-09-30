
export default class page{
    async open(path){
       await browser.pause(1000);
       await browser.url(path);
       //await browser.executeScript("document.documentElement.outerText = '0.8';");
       console.log("_________________________________________________")
       await browser.keys(['Control', '-'])
       console.log("_________________________________________________")
    }
}