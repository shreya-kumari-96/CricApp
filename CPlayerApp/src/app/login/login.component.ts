import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AuthenticationService} from '../authentication.service';
import {RouterService} from '../router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  key:string;
  loginForm: FormGroup;
  userid = new FormControl();
  password = new FormControl();
  submitMessage: string;
  loginflag:boolean=false;
  constructor(private authService: AuthenticationService, private routerservice: RouterService) { }

  ngOnInit() {

    if (sessionStorage.getItem('key') != null) {
      this.loginflag = true;
      this.key = sessionStorage.getItem('key');
      console.log(this.key);
      this.routerservice.routeToDashboard();
    }
    else
    {
      this.userid = new FormControl('', [Validators.required]),
      this.password = new FormControl('', [Validators.required, Validators.minLength(6)]);
    this.loginForm = new FormGroup({
      userid: this.userid,
      password: this.password
    });
    }
    
  }

  loginSubmit() {
      
    console.log(this.loginForm.value.userid);
    console.log(this.loginForm.value.password);
    console.log("Inside SignIN");
    this.authService.getUserId(this.loginForm.value).subscribe(
      data => {
        
          this.authService.setBearerToken(data["token"]);
          console.log("logged in");
          console.log(data);
          console.log("Token: ")
          console.log(data["token"]);
          // console.log(data.length);
          // if(data==null)
          // {
          //   console.log("Wrong userid and password");
          //   this.submitMessage="Wrong userid and password !!";
          //   this.routerservice.routeToLogin();
          // }
          // if(data.length==1)
          // {

          //   sessionStorage.setItem("key", this.loginForm.value.userid);
          //   console.log(sessionStorage.getItem("key"));
          //   this.loginflag=true;
          //   this.routerservice.routeToDashboard();
          // }
          sessionStorage.setItem("key", this.loginForm.value.userid);
          console.log(sessionStorage.getItem("key"));
          this.loginflag=true;
          this.routerservice.routeToStastics();
          
      },
      error => {
        
        console.log(error);
      });
      
      // console.log(sessionStorage.getItem("key"));
  //   this.authService.getUserList().subscribe(
  //     data=>{
  //       console.log(data);
  //     },
  //     error => {
        
  //           console.log(error);
  //         });
  }
}