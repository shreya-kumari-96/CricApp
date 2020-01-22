import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {user} from './user';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = 'http://localhost:8002/api/users';
  constructor(private http: HttpClient) { }

  
  getUserId(userr:user): Observable<any> {
    
    return this.http.post<any>(`${this.baseUrl}`,userr, 
    { headers: new HttpHeaders().set('responseType', 'text')}).pipe(
      map(
        userData => {
           sessionStorage.setItem('username',userr.userid);
         let tokenStr = userData.token;
         console.log("Token string: " + tokenStr);
         localStorage.setItem('token', tokenStr);
         return userData;
        }
      )
    );
      
  }

  setBearerToken(token: string) {
    sessionStorage.setItem('token',token);
  }
  getBearerToken() {
    return sessionStorage.getItem('token');
  }



  addUser(userr: user): Observable<Object>{
    console.log("Add User");
    return this.http.post(`${this.baseUrl}` + `/create`, userr);
  }
  

  getOneUser(userId: String): Observable<user> {
    return this.http.get<user>(`${this.baseUrl}/${userId}`);
  }


}
