import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import {DashboardPage} from './dashboard.po';

describe('DASHBOARD TEST ', () => {
  let page: DashboardPage;

  beforeEach(() => {
    page = new DashboardPage();
  });

// /*dashboard page*/
it('should check nav present on dashboard page', () => {
    page.navigateToDashboard();
    expect(page.isnavPresent()).toBeTruthy('<nav> should exist in dashboard.component.html');
  });
it('should check footer present on dashboard page', () => {
    page.navigateToDashboard();
    expect(page.isfooterPresent()).toBeTruthy('<footer> should exist in dashboard.component.html');
  });
it('should check section present on dashboard page', () => {
    page.navigateToDashboard();
    expect(page.issectionPresent()).toBeTruthy('<section> should exist in dashboard.component.html');
  });
  it('should check form present on dashboard page', () => {
    page.navigateToDashboard();
    expect(page.isformPresent()).toBeTruthy('<form> should exist in dashboard.component.html');
  });
  it('should check button present on dashboard page', () => {
    page.navigateToDashboard();
    expect(page.isbuttonPresent()).toBeTruthy('<button> should exist in dashboard.component.html');
  });
  it('should check mat-card present on dashboard page', () => {
    page.navigateToDashboard();
    expect(page.isbuttonPresent()).toBeTruthy('<mat-card *ngFor="let s of searchResultsImg" class="card_fav"> should exist in dashboard.component.html');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

