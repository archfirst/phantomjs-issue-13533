mocha-selenium-webdriver
========================
- Test runner is Mocha.
- Runs a selenium test using the Selenium WebDriver.
- No need to run Selenium standalone server, but you should have
chrome and phantomjs drivers in your path.
- Change `test/nameFormTest.js` line 11 to run with different browsers:
    - Chrome: `.forBrowser('chrome')`
    - PhantomJS: `.forBrowser('phantomjs')`

To run the test:

    $ cd src
    $ http-server  <--- Starts the web app at localhost:8080

In a different shell

    $ npm install
    $ mocha

**The tests are currently running in Chrome. I was not able to run them in PhantomJS
(latest version 2.0.0).**
