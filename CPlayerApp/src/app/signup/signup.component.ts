import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { RouterService } from '../router.service';
import { user } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  loginflag: boolean;
  key: string;
  user: user = new user();
  signupForm: FormGroup;
  firstname = new FormControl();
  userid = new FormControl();
  password = new FormControl();
  imgURL;
  img: string;

  fileSelected(event) {
    const file = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (_event => {
      this.imgURL = reader.result;
      this.img = reader.result.toString();
      console.log(this.img);
    })
  }

  constructor(private authService: AuthenticationService, private routerservice: RouterService) { }

  ngOnInit() {

    if (sessionStorage.getItem('key') != null) {
      this.loginflag = true;
      this.key = sessionStorage.getItem('key');
      console.log(this.key);
      this.routerservice.routeToDashboard();
    }
    else {
      this.firstname = new FormControl('', [Validators.required]),
        this.userid = new FormControl('', [Validators.required]),
        this.password = new FormControl('', [Validators.required, Validators.minLength(6)]);
      this.signupForm = new FormGroup({
        firstname: this.firstname,
        userid: this.userid,
        password: this.password
      });
    }
  }

  signupSubmit() {
    this.user.id = this.signupForm.value.id;
    this.user.userid = this.signupForm.value.userid;
    this.user.firstname = this.signupForm.value.firstname;
    this.user.password = this.signupForm.value.password;
    this.user.img = this.imgURL;
    console.log(this.imgURL);
    console.log(this.user);
    this.authService.addUser(this.user).subscribe(
      data => {
        console.log(this.signupForm.value);
      },
      error => {
        console.log(error);
      });
    this.routerservice.routeToLogin();
  }

  login() {
    this.routerservice.routeToLogin();
  }
}