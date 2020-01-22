import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('App Page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   expect(page.getTitleText()).toEqual('CPlayerApp app is running!');
  // });
//   /*home page*/
// it('should check nav present on home page', () => {
//   page.navigateTo();
//   expect(page.isnavPresent()).toBeTruthy('<nav> should exist in home.component.html');
// });

// it('should check footer present on home page', () => {
//   page.navigateTo();
//   expect(page.isfooterPresent()).toBeTruthy('<footer> should exist in home.component.html');
// });
// it('should check section present on home page', () => {
//   page.navigateTo();
//   expect(page.issectionPresent()).toBeTruthy('<section> should exist in home.component.html');
// });



  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
