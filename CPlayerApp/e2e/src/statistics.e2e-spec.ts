import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import {DashboardPage} from './dashboard.po';
import {PlayerStasticsPage} from './statistics.po';

describe('PLAYER STASTICS TEST ', () => {
  let page: PlayerStasticsPage;

  beforeEach(() => {
    page = new PlayerStasticsPage();
  });

// /*dashboard page*/
it('should check nav present on stastics page', () => {
    page.navigateToPlayerStastics();
    expect(page.isnavPresent()).toBeTruthy('<nav> should exist in dashboard.component.html');
  });
it('should check footer present Stastics page', () => {
    page.navigateToPlayerStastics();
    expect(page.isfooterPresent()).toBeTruthy('<footer> should exist in dashboard.component.html');
  });
it('should check section present on Stastics page', () => {
    page.navigateToPlayerStastics();
    expect(page.issectionPresent()).toBeTruthy('<section> should exist in dashboard.component.html');
  });
  it('should check div present on Stastics page', () => {
    page.navigateToPlayerStastics();
    expect(page.isdivPresent()).toBeTruthy('<div> should exist in dashboard.component.html');
  });
  it('should check ul present on Stastics page', () => {
    page.navigateToPlayerStastics();
    expect(page.isulPresent()).toBeTruthy('<ul> should exist in dashboard.component.html');
  });
  it('should check li present on Stastics page', () => {
    page.navigateToPlayerStastics();
    expect(page.isliPresent()).toBeTruthy('<li> should exist in dashboard.component.html');
  });
 

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

