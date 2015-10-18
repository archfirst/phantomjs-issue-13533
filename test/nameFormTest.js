var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var assert = require('assert');
var By = webdriver.By;

test.describe('Name Form', function() {
    var browser;

    test.beforeEach(function() {
        browser = new webdriver.Builder()
            .forBrowser('chrome')
            .build();
    });

    test.afterEach(function() {
        browser.quit();
    });

    test.it('should display the entered name when the Submit button is clicked', function() {

        // The simplified approach below of calling Webdriver methods works because of
        // the Promise Manager (see https://code.google.com/p/selenium/wiki/WebDriverJs#Control_Flows)
        browser.get('http://localhost:8080');

        // Enter firstName, lastName and click submit
        browser.findElement(By.id('firstName')).sendKeys('Naresh');
        browser.findElement(By.id('lastName')).sendKeys('Bhatia');
        browser.findElement(By.id('submitButton')).click();

        // Take a screen shot right after the click
        // browser.takeScreenshot().then(function(image) {
        //     require('fs').writeFile('./screenshot-1.png', image, 'base64');
        // });

        // Wait for displayName to be populated
        browser.wait(function() {
            return browser.findElement(By.id('displayName')).getText()
                .then(function(displayName) {
                    if (displayName.length > 0) {
                        assert.equal(displayName, 'Naresh Bhatia');
                        return true;
                    }
                    else {
                        return false;
                    }
                });
        }, 20000);

        // Take a screen shot after the wait
        // browser.takeScreenshot().then(function(image) {
        //     require('fs').writeFile('./screenshot-2.png', image, 'base64');
        // });
    });
});