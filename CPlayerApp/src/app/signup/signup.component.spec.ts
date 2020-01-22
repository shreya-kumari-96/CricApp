// / import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { SignupComponent } from './signup.component';
import { ReactiveFormsModule, FormGroupDirective } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatSnackBar, MatSnackBarModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from 'src/app/authentication.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, from } from 'rxjs';
import { RouterService } from 'src/app/router.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
  describe('RegisterComponent', () => {
    let component: SignupComponent;
    let fixture: ComponentFixture<SignupComponent>;
    let authService: AuthenticationService;
    let routerService: RouterService;
    let mySpy: any;
    let regComponent: SignupComponent;
    let obj: FormGroupDirective;
    beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [SignupComponent],
          imports: [ReactiveFormsModule,
              BrowserAnimationsModule,
              MatButtonToggleModule,
              FormsModule,
              RouterTestingModule,
              MatCardModule,
              MatFormFieldModule,
              HttpClientModule,
              MatInputModule,
              MatPaginatorModule,
              ReactiveFormsModule,
              MatButtonModule,
              ReactiveFormsModule,
              MatSnackBarModule,
              HttpClientTestingModule,
              MatIconModule,
              MatTooltipModule,
              MatDialogModule
          ],
          providers: [AuthenticationService, RouterService]
      })
          .compileComponents();
        }));
          beforeEach(() => {
            fixture = TestBed.createComponent(SignupComponent);
            component = fixture.componentInstance;
            authService = TestBed.get(AuthenticationService);
            routerService = TestBed.get(RouterService);
            fixture.detectChanges();
          });
          it('should create', async() => {
            expect(component).toBeTruthy();
          });
          it('should set submitted to true', async(() => {
            component.signupForm;
            expect(component.signupForm).toBeTruthy();
          }));
          it('should contain div tag', () => {
            let element = fixture.debugElement.query(By.css('div'));
            expect(element).toBeTruthy();
          });
          // it('should contain img tag', () => {
          //   let element = fixture.debugElement.query(By.css('img'));
          //   expect(element).toBeTruthy();
          // });
          it('form invalid when userid is empty', () => {
            expect(component.userid.valid).toBeFalsy();
          });
          it('form invalid when password is empty', () => {
            expect(component.password.valid).toBeFalsy();
          });
          it('form should be invalid when the fields are left empty', async(() => {
            expect(component.userid.valid).toBeFalsy();
            expect(component.password.valid).toBeFalsy();
          }));
          it('should handle call signupSubmit method', () => {
            inject([authService], (injectService: AuthenticationService) => {
              expect(injectService).toBe(authService);
            });
            let check: any;
            mySpy = spyOn(authService, 'setBearerToken').and.callFake(() => { });
            authService.setBearerToken('');
            //component.loginSubmit(obj);
            expect(mySpy).toHaveBeenCalled();
          });
          it('should contain footer tag', () => {
            let element = fixture.debugElement.query(By.css('footer'));
            expect(element).toBeTruthy();
          });
          it('should nav footer tag', () => {
            let element = fixture.debugElement.query(By.css('nav'));
            expect(element).toBeTruthy();
          });
        });
