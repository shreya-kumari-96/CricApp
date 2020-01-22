import { Component, OnInit } from '@angular/core';
import { CplayerService } from '../cplayer.service';
import { RouterService } from '../router.service';
import { AuthenticationService } from '../authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  imgForm: FormGroup;
  loginflag:boolean;
  searchForm: FormGroup;
  search = new FormControl();
  favdata: Array<any> = [];
  storedata: Array<any> = [];
  fstoredata: Array<any> = [];
  key: string;
  userImage: string;
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
      this.authservice.getOneUser(this.key).subscribe(data => {
        this.userImage = data.img;
        // console.log(this.userImage);

        // this.cplayerservice.getFavourite(this.key).subscribe(
        //   data => {
        //     console.log("favvv");
        //     this.favdata = data;
        //     console.log(this.favdata);
        //     console.log(this.favdata.length);
        //     for (let i = 0; i < this.favdata.length; i++) {
        //       this.storedata['pid'] = this.favdata[i]['pid'];
        //       this.storedata['name'] = this.favdata[i]['name'];
        //       this.storedata['country'] = this.favdata[i]['country'];
        //       console.log(this.storedata);
        //       this.fstoredata.push(this.storedata);
        //       this.storedata = [];

        //     }
        //     console.log(this.fstoredata);
        //   },
        //   error => {
        //     console.log(error);
        //   }
        // );
        this.getfav();
      }
      );
    }
  }

  getfav()
  {
    this.key = sessionStorage.getItem('key');
    console.log("Key: ");
    console.log(this.key);
    if (this.key === null) {
      this.routerservice.routeToLogin();
    }
    else {
    this.fstoredata=[];
    this.cplayerservice.getFavourite(this.key).subscribe(
      data => {
        console.log("favvv");
        this.favdata = data;
        console.log(this.favdata);
        console.log(this.favdata.length);
        for (let i = 0; i < this.favdata.length; i++) {
          this.storedata['pid'] = this.favdata[i]['pid'];
          this.storedata['name'] = this.favdata[i]['name'];
          this.storedata['country'] = this.favdata[i]['country'];
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

  deletefav(id) {
    let key = sessionStorage.getItem('key');
    this.cplayerservice.delFavourite(key, id).subscribe(
      data => {
        console.log("delete fav done");
        this.getfav();
      },
      error => {
        console.log(error);
      }
    );
    
  }

  // imgSubmit()
  // {
  //   console.log("imggg callled");
  //   this.loginflag=false;
  //   this.userImage=null;
  //   sessionStorage.removeItem('key');
  //   this.getfav();
  // }

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
    this.routerservice.routeToDashboard();
  }

  details(id) {
    this.cplayerservice.setPlayerid(id);
    this.routerservice.routeToViewdetails();
  }
}
