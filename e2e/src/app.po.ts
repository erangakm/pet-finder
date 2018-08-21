import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getSitenameText() {
    return element(by.css('app-root app-header #header .sitename')).getText();
  }
}
