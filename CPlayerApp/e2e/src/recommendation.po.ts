import { browser, by, element, promise, ElementFinder } from 'protractor';

export class RecommendationViewPage {

  getrecommendationComponent(): ElementFinder {
    return element(by.tagName('app-recommendation'));
  }
  navigateToRecommendationView() {
    // return browser.get(browser.baseUrl) as Promise<any>;
    return browser.get('/recommendation');
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
  getdiv(){
    return element(by.css('div'));
  }
  geth1(){
    return element(by.css('h1'));
  }
  
  isdivPresent():promise.Promise<boolean>{
    return this.getdiv().isPresent();
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
  ish1Present():promise.Promise<boolean>{
    return this.geth1().isPresent();
  }
  
 
}
