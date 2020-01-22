import { browser, by, element, promise, ElementFinder } from 'protractor';

export class PlayerStasticsPage {

  getdashboardComponent(): ElementFinder {
    return element(by.tagName('app-player-stastics'));
  }
  navigateToPlayerStastics() {
    // return browser.get(browser.baseUrl) as Promise<any>;
    return browser.get('/stastics');
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
  getdiv(){
    return element(by.css('div'));
  }
  getul(){
    return element(by.css('ul'));
  }
  getli(){
    return element(by.css('li'));
  }
  getnav(){
  return element(by.css('nav'));
}
  
  isnavPresent():promise.Promise<boolean>{
    return this.getnav().isPresent();
  }
 
  issectionPresent():promise.Promise<boolean>{
    return this.getsection().isPresent();
  }
  isfooterPresent():promise.Promise<boolean>{
    return this.getfooter().isPresent();
  }
isdivPresent():promise.Promise<boolean>{
  return this.getdiv().isPresent();
}
isulPresent():promise.Promise<boolean>{
  return this.getul().isPresent();
}
isliPresent():promise.Promise<boolean>{
  return this.getli().isPresent();
}
 
}
