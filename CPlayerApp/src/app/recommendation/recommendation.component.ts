import { Component, OnInit } from '@angular/core';
import { CplayerService } from '../cplayer.service';
import { RouterService } from '../router.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {

  imgForm: FormGroup;
  userImage: string;
  searchForm: FormGroup;
  search = new FormControl();
  key: string;
  loginflag: boolean;
  recdata: Array<any> = [];
  storedata: Array<any> = [];
  fstoredata: Array<any> = [];
  constructor(private cplayerservice: CplayerService, private routerservice: RouterService, private authservice: AuthenticationService) { }

  ngOnInit() {

    this.search = new FormControl('', [Validators.required])
    this.searchForm = new FormGroup({
      search: this.search
    });

    this.imgForm = new FormGroup({
    });

    this.key = sessionStorage.getItem('key');
    console.log("Key: ");
    console.log(this.key);
    if (this.key === null) {
      this.routerservice.routeToLogin();
    }

    else {
      this.loginflag = true;
      // this.key = sessionStorage.getItem('key');
      // console.log(this.key);
      this.authservice.getOneUser(this.key).subscribe(data => {
        this.userImage = data.img;
        // console.log(this.userImage);
        this.getrec();
        
      });
    }
  }

  getrec()
  {
    this.key = sessionStorage.getItem('key');
    console.log("Key: ");
    console.log(this.key);
    if (this.key === null) {
      this.routerservice.routeToLogin();
    }
    else {
      this.fstoredata=[];
    this.cplayerservice.getRec(this.key).subscribe(
      data => {
        console.log("Recc");
        this.recdata = data;
        console.log(this.recdata);
        console.log(this.recdata.length);
        for (let i = 0; i < this.recdata.length; i++) {
          this.storedata['pid'] = this.recdata[i]['pid'];
          this.storedata['name'] = this.recdata[i]['name'];
          this.storedata['country'] = this.recdata[i]['country'];
          this.storedata['imageurl'] = this.recdata[i]['imageurl'];
          console.log(this.storedata);
          this.fstoredata.push(this.storedata);
          this.storedata = [];

        }
        console.log(this.fstoredata);
      },
      error => {
        console.log(error);
      }
    );
  }
}
  

 searchSubmit() {
    this.routerservice.routeToDashboard();
  }

  login() {
    this.routerservice.routeToLogin();
  }

  logoutSubmit()
  {
    this.loginflag=false;
    this.userImage=null;
    sessionStorage.removeItem('key');
    this.routerservice.routeToLogin();
  }


  delrec(id) {
    let key = sessionStorage.getItem('key');
    this.cplayerservice.delRec(key, id).subscribe(
      data => {
        console.log("delete rec done");
        this.getrec();
      },
      error => {
        console.log(error);
      }
    );
  }

  details(id) {
    this.cplayerservice.setPlayerid(id);
    this.routerservice.routeToViewdetails();
  }
}