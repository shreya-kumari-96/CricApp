import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router, private location: Location) { }

  routeToHome() {
    this.router.navigate(['playerranking']);
  }
  routeToLogin() {
    this.router.navigate(['login']);
  }
  routeToSignup() {
    this.router.navigate(['signup']);
  }
  routeToViewdetails()
  {
    this.router.navigate(['viewdetails']);
  }
  routeToFav()
  {
    this.router.navigate(['favourite']);
  }
  routeToRec()
  {
    this.router.navigate(['recommendation']);
  }
  routeToDashboard()
  {
    this.router.navigate(['dashboard']);
  }
  routeToLivematch()
  {
    this.router.navigate(['livematch']);
  }
  routeToViewlivematch()
  {
    this.router.navigate(['viewlivematch']);
  }
  routeToStastics()
  {
    this.router.navigate(['stastics']);
  }
}
