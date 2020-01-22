import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {PlayerStasticsComponent} from './player-stastics/player-stastics.component';
import {ViewdetailsComponent} from './viewdetails/viewdetails.component';
import {FavouriteComponent} from './favourite/favourite.component';
import {RecommendationComponent} from './recommendation/recommendation.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LivematchComponent} from './livematch/livematch.component';
import {ViewlivematchComponent} from './viewlivematch/viewlivematch.component';
import {NotfoundComponent} from './notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'playerranking', component: HomeComponent},
  {
    path: 'signup', component: SignupComponent
  },
  { path: 'login', component: LoginComponent },
  { path: 'stastics', component: PlayerStasticsComponent },
  {path:'viewdetails', component:ViewdetailsComponent},
  {path:'favourite', component:FavouriteComponent},
  {path:'recommendation', component:RecommendationComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'livematch', component:LivematchComponent},
  {path:'viewlivematch', component:ViewlivematchComponent},
  {path:'**', component:NotfoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
