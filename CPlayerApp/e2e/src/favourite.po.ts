import { browser, by, element, promise, ElementFinder } from 'protractor';

export class FavouritePage {
  gethomeComponent(): ElementFinder {
    return element(by.tagName('app-favourite'));
  }
  navigateToFavourite() {
    // return browser.get(browser.baseUrl) as Promise<any>;
    return browser.get('/favourite');
  }

  // getTitleText() {
  //   return element(by.css('app-root .content span')).getText() as Promise<string>;
  // }
 
  getHeader(){
    return element(by.css('nav'));   
  }
  getsection(){
    return element(by.css('section'));
  }
  getfooter(){
    return element(by.css('footer'));
  }
  getform(){
    return element(by.css('form'));
  }
  getButton(){
    return element(by.css('button'));
  }
  getdiv(){
    return element(by.css('div'))
  }
  
  isnavPresent():promise.Promise<boolean>{
    return this.getHeader().isPresent();
  }
 
  issectionPresent():promise.Promise<boolean>{
    return this.getsection().isPresent();
  }
  isfooterPresent():promise.Promise<boolean>{
    return this.getfooter().isPresent();
  }

  isformPresent():promise.Promise<boolean>{
    return this.getform().isPresent();
  }
  isbuttonPresent():promise.Promise<boolean>{
    return this.getButton().isPresent();
  }
  isdivPresent():promise.Promise<boolean>{
    return this.getdiv().isPresent();
  }
 
}
