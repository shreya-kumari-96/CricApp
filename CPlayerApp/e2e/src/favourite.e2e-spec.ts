import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import {FavouritePage} from './favourite.po';

describe('FAVOURITE TEST', () => {
  let page: FavouritePage;

  beforeEach(() => {
    page = new FavouritePage();
  });

/*favourite page*/
it('should check div present on favourite page', () => {
    page.navigateToFavourite();
    expect(page.isdivPresent()).toBeTruthy('<div> should exist in favourite.component.html');
  });
  it('should check nav present on favourite page', () => {
    page.navigateToFavourite();
    expect(page.isnavPresent()).toBeTruthy('<nav> should exist in favourite.component.html');
  });
  
  it('should check footer present on favourite page', () => {
    page.navigateToFavourite();
    expect(page.isfooterPresent()).toBeTruthy('<footer> should exist in favourite.component.html');
  });
  it('should check section present on favourite page', () => {
    page.navigateToFavourite();
    expect(page.issectionPresent()).toBeTruthy('<section> should exist in favourite.component.html');
  });
 
  


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});