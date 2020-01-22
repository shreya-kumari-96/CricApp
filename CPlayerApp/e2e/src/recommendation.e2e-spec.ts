import { browser, logging } from 'protractor';
import {RecommendationViewPage} from'./recommendation.po';

describe('RECOMMENDATION TEST', () => {
  let page: RecommendationViewPage;

  beforeEach(() => {
    page = new RecommendationViewPage();
  });

//   /*Recommendation page*/
it('should check nav present on recommendation page', () => {
    page.navigateToRecommendationView();
    expect(page.isnavPresent()).toBeTruthy('<nav> should exist in home.component.html');
  });

  it('should check footer present on recommendation page', () => {
    page.navigateToRecommendationView();
    expect(page.isfooterPresent()).toBeTruthy('<footer> should exist in home.component.html');
  });
  it('should check section present on recommendation page', () => {
    page.navigateToRecommendationView();
    expect(page.issectionPresent()).toBeTruthy('<section> should exist in home.component.html');
  });
  it('should check div present on recommendation page', () => {
    page.navigateToRecommendationView();
    expect(page.isdivPresent()).toBeTruthy('<div> should exist in home.component.html');
  });
  it('should check h1 present on recommendation page', () => {
    page.navigateToRecommendationView();
    expect(page.ish1Present()).toBeTruthy('<h1> should exist in home.component.html');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});