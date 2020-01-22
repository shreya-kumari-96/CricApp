import { TestBed } from '@angular/core/testing';
import { async, fakeAsync, tick } from '@angular/core/testing';

import { RouterService } from './router.service';
import { RouterTestingModule } from '@angular/router/testing';
import {AppRoutingModule} from './app-routing.module';
;import { from } from 'rxjs';
import { Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';



describe('RouterService: App', () => {

  let location:Location;
  let router:Router;
  let fixture;

  beforeEach(() => {
  TestBed.configureTestingModule({
    // imports:[RouterTestingModule.withRoutes(routes)],
    // declarations:[
    //   HomeComponent,
    //   DashboardComponent,
    //   SignupComponent,
    //   LoginComponent,
    //   AppComponent,
    //   AppRoutingModule
    // ]
    
  });

  router = TestBed.get(Router);
  location = TestBed.get(Location);
  fixture = TestBed.createComponent(AppComponent);

});

  // it('should be created', () => {
  //   const service: RouterService = TestBed.get(RouterService);
  //   expect(service).toBeTruthy();
  // });
})

