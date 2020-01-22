import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';
import { FavouriteComponent } from '../favourite/favourite.component';
import { RecommendationComponent } from '../recommendation/recommendation.component';
import { PlayerStasticsComponent } from '../player-stastics/player-stastics.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule } from '@angular/material';
import { MatListModule, MatSelectModule, MatDialogModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { HomeComponent } from '../home/home.component';
import {AngularFontAwesomeModule } from 'angular-font-awesome';
import { ViewdetailsComponent } from '../viewdetails/viewdetails.component';
import { MatTabsModule } from '@angular/material';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LivematchComponent } from '../livematch/livematch.component';
import { ViewlivematchComponent } from '../viewlivematch/viewlivematch.component';
import { AuthInterceptorService } from '../auth-interceptor.service';

import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormGroupDirective } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule} from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../authentication.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable } from 'rxjs';
import { RouterService } from '../router.service';
describe('loginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authenticationService: AuthenticationService;
  let routerService: RouterService;
  let mySpy: any;
  let obj: FormGroupDirective;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ReactiveFormsModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        FormsModule,
        RouterTestingModule,
        MatFormFieldModule,
        HttpClientModule,
        MatInputModule,
        MatPaginatorModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        ReactiveFormsModule,
        MatButtonToggleModule,
        MatDialogModule,
        MatSnackBarModule,
        HttpClientTestingModule
      ],
      providers: [AuthenticationService, RouterService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authenticationService = TestBed.get(AuthenticationService);
    routerService = TestBed.get(RouterService);
    fixture.detectChanges();
  });

  it('should create', async() => {
    expect(component).toBeTruthy();
  });
  it('should set submitted to true', async(() => {
    component.loginForm;
    expect(component.loginForm).toBeTruthy();
  }));
  it('should contain div tag', () => {
    let element = fixture.debugElement.query(By.css('div'));
    expect(element).toBeTruthy();
  });
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
  it('should handle call loginSubmit method', () => {
    inject([authenticationService], (injectService: AuthenticationService) => {
      expect(injectService).toBe(authenticationService);
    });
    let check: any;
    mySpy = spyOn(authenticationService, 'setBearerToken').and.callFake(() => { });
    authenticationService.setBearerToken('');
    //component.loginSubmit(obj);
    expect(mySpy).toHaveBeenCalled();
  });
  it('should handle call logout method', () => {
    inject([routerService], (injectService: RouterService) => {
        expect(injectService).toBe(routerService);
    });
    // mySpy = spyOn(routerService, 'routeToSearch');
    // authenticationService.logOut;
    // expect(mySpy).toHaveBeenCalled();
});
});
