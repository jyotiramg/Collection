import {config as baseConfig} from "./wdio.conf.js"

export const config = Object.assign(baseConfig, {
    environment: "QA",
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true,
    }],
    beforeTest: async function (test, context) {
        allurereporter.addEnvironment("QA", 'Regression Testing');
        allurereporter.addEnvironment("Sprint", '24');
        allurereporter.addEnvironment("Executed by", 'Collections_Automation');
    },
    specs: ['./test/specs/**/',
    ],

    services: [
        ['chromedriver']],

    
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],

    
    onComplete: function () {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }
                console.log('Allure report successfully generated')
                resolve()
            })
        })
    }

})