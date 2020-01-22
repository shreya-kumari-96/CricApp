import { browser, by, element, promise, ElementFinder } from 'protractor';

export class DashboardPage {

  getdashboardComponent(): ElementFinder {
    return element(by.tagName('app-dashboard'));
  }
  navigateToDashboard() {
    // return browser.get(browser.baseUrl) as Promise<any>;
    return browser.get('/dashboard');
  }

 
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
 
}
