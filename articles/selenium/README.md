<meta property="og:title" content="Acceptance tests automation with Selenium and Node.js" />
<meta property="og:image" content="images/selenium.jpg" />

# Acceptance tests automation with Selenium and Node.js

Here is a nice flow for automating your user acceptance tests:

1. Fire up [Selinium IDE](https://addons.mozilla.org/en-US/firefox/addon/selenium-ide)(Firefox extension).
1. Record your test
1. Save as java file
1. Copy into node.js file
1. Run your node file

There are a lot of tools that were written on top of selenium to help you write your tests in Node.js/Javascript but I found the offical JavaScript driver - [WebDriverJs](https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs) to be enough to get the job done. Here is a 3 minutes video demonstrating it:

<iframe width="560" height="315" src="https://www.youtube.com/embed/kRIz7Gumnik" frameborder="0" allowfullscreen></iframe>

<br/>
<br/>

Code sample - Attempt to signup and take a screenshot of the failure page.
```js
// npm install selenium-webdriver

var fs = require('fs');
var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var until = webdriver.until;

var driver = new webdriver.Builder()
  .forBrowser('firefox')
  .build();

driver.get("https://my-awesome-website.com");
driver.findElement(By.className('signup-link')).click();
driver.findElement(By.css("label")).click();
driver.findElement(By.id("continue-button")).click();
driver.findElement(By.id("first-name")).sendKeys("josh");
driver.findElement(By.id("last-name")).sendKeys("felkor");
driver.findElement(By.id("signup-submit")).click();

driver.takeScreenshot().then(function(data) {
  writeScreenshot(data, 'missing-fields.png');
});

var textPromise = driver.findElement(By.id("signup-submit")).getText();

textPromise.then(function(text) {
  if (text === "TRY AGAIN") {
    console.log("success");
    process.exit(0);
    return;
  } else {
    console.log("fail");
    process.exit(1);
  }
});

function writeScreenshot(data, name) {
  name = name || 'ss.png';
  var screenshotPath = '/tmp/';
  fs.writeFileSync(screenshotPath + name, data, 'base64');
};
```

Resources

* My github repository with this code sample - https://github.com/oren/selenium
* Official JavaScript Driver - https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs
* WebDriver Spec - https://w3c.github.io/webdriver/webdriver-spec.html
