import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

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
import { LivematchComponent } from '../livematch/livematch.component';
import { ViewlivematchComponent } from '../viewlivematch/viewlivematch.component';
import { AuthInterceptorService } from '../auth-interceptor.service';

import { inject } from '@angular/core/testing';
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

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let authenticationService: AuthenticationService;
  let routerService: RouterService;
  let mySpy: any;
  let obj: FormGroupDirective;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
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
   

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(DashboardComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });
  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    authenticationService = TestBed.get(AuthenticationService);
    routerService = TestBed.get(RouterService);
    fixture.detectChanges();
  });
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//   it('should contain div tag', async() => {
//     let element = fixture.debugElement.query(By.css('div'));
//     expect(element).toBeTruthy();
//   });
//   it('should create', () => {
//     expect(component).toBeTruthy();
// });
// it('should set submitted to true', async(() => {
//     component.details;
//     expect(component.details).toBeTruthy();
// }));
// it('should contain div tag', () => {
//     let element = fixture.debugElement.query(By.css('div'));
//     expect(element).toBeTruthy();
// });
// it('empty bar when input is false', async(() => {
//     expect(component.searchForm.valueOf).toBeTruthy();
//     //   //expect(component.password.valid).toBeFalsy();
// }));
});
