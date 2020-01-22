import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { PlayerStasticsComponent } from './player-stastics/player-stastics.component';
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
import { HomeComponent } from './home/home.component';
import {AngularFontAwesomeModule } from 'angular-font-awesome';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { MatTabsModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LivematchComponent } from './livematch/livematch.component';
import { ViewlivematchComponent } from './viewlivematch/viewlivematch.component';
import { AuthInterceptorService } from './auth-interceptor.service';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    FavouriteComponent,
    RecommendationComponent,
    PlayerStasticsComponent,
    HomeComponent,
    ViewdetailsComponent,
    DashboardComponent,
    LivematchComponent,
    ViewlivematchComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatListModule,
    MatSelectModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxPaginationModule,
    AngularFontAwesomeModule ,
    MatTabsModule,
    CarouselModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass:AuthInterceptorService , multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
