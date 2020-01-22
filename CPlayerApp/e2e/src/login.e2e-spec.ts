import { LoginPage } from './login.po';

describe('LOGIN TEST', () => {
  let page: LoginPage;
  beforeEach(() => {
    page = new LoginPage();
    page.navigateToLogin();
  });
//Input Box Email
  it('should get username input box', () => {
    page.navigateToLogin();
    expect(page.getEmailTextBox())
    .toBeTruthy(`<input class="userid" matInput type="text" formControlName="userid" placeholder="Username"> should exist in login.component.html`);
  });
  //Input Box Password
  it('should get passsword input box', () => {
    page.navigateToLogin();
    expect(page.getPasswordTextBox())
    .toBeTruthy(`<input class="password" matInput type="password" formControlName="password" placeholder="Password">
      should exist in login.component.html`);
  });
  //Submit Button
  it('should get submit button', () => {
    page.navigateToLogin();
    expect(page.isSubmitButtonPresent()).toBeTruthy(`<button  type="submit" [disabled]="!loginForm.valid" class="loginbutton">Login</button> should
      exist in login.component.html`);
  });
});