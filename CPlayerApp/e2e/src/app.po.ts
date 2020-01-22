import { browser, by, element, promise , ElementFinder} from 'protractor';

export class AppPage {


  // gethomeComponent(): ElementFinder {
  //   return element(by.tagName('app-root'));
  // }
  navigateTo() {
     return browser.get(browser.baseUrl) as Promise<any>;
    // return browser.get('/home');
  }

 
  // getHeader(){
  //   return element(by.css('nav'));   
  // }
  // getsection(){
  //   return element(by.css('section'));
  // }
  // getfooter(){
  //   return element(by.css('footer'));
  // }
  
  
  
  // isnavPresent():promise.Promise<boolean>{
  //   return this.getHeader().isPresent();
  // }
 
  // issectionPresent():promise.Promise<boolean>{
  //   return this.getsection().isPresent();
  // }
  // isfooterPresent():promise.Promise<boolean>{
  //   return this.getfooter().isPresent();
  // }

  
  
  

  // getTitleText() {
  //   return element(by.css('app-root .content span')).getText() as Promise<string>;
  // }
 
  
 
}
