import { browser, element, by } from 'protractor';

export class YourCoolAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('myapp-root h1')).getText();
  }
}
