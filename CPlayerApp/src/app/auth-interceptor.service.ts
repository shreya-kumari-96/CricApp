import { Injectable } from '@angular/core';
import {AuthenticationService} from './authentication.service';
import { HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor(private authservice:AuthenticationService) { }

  intercept(req: HttpRequest<any>, next:HttpHandler){
    console.log(req);
    req=req.clone({
      headers: req.headers.set('Authorization', 'Bearer '+ this.authservice.getBearerToken()).set("Access-Control-Allow-Origin","*")
    })
    console.log(req);
    return next.handle(req);
  }
}
