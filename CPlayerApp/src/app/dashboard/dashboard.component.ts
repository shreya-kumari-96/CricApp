import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CplayerService } from '../cplayer.service';
import { RouterService } from '../router.service';
import { AuthenticationService } from '../authentication.service';
import { user } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  imgForm: FormGroup;
  loginflag: boolean = false;
  fdata: Array<any> = [];
  playersdata: Array<any> = [];
  searchForm: FormGroup;
  search = new FormControl();
  searchResultsImg: Array<any> = [];
  searchResultImg: Array<any> = [];
  searchResult: Array<any> = [];
  searchResults: Array<any> = [];
  imageurl: string;
  profile: string;
  uprofile: string;
  key: string;
  user: user;
  userImage: string;
  playeridlist: Array<number> = [];
  recdata: Array<any> = [];
  recsdata: Array<any> = [];
  obj: Array<any> = [];
  news: Array<any> = [];
  newsList: Array<any> = [];
  country: string;
  imgpic: string;
  recflag: boolean = false;
  date: string;


  constructor(private cplayerservice: CplayerService, private routerservice: RouterService, private authservice: AuthenticationService) { }

  ngOnInit() {
    if (sessionStorage.getItem('key') != null) {
      this.loginflag = true;
      this.key = sessionStorage.getItem('key');
      console.log(this.key);
      this.authservice.getOneUser(this.key).subscribe(data => {
        this.userImage = data.img;
        // console.log(this.userImage);
      });
    }
    this.search = new FormControl('', [Validators.required])
    this.searchForm = new FormGroup({
      search: this.search
    });

    this.imgForm = new FormGroup({
    });

    this.playeridlist = [253802, 303669, 234675, 10617, 28081, 625371, 311158, 35320, 26421, 28763];
    for (let i = 0; i < this.playeridlist.length; i++) {


      this.cplayerservice.getPlayerStastics(this.playeridlist[i]).subscribe(
        data => {
          this.fdata = data;
          this.recdata['img'] = this.fdata['imageURL'];
          this.recdata['country'] = this.fdata['country'];
          this.recdata['pid'] = this.playeridlist[i];
          this.country = this.fdata['country'];
          this.recdata['name'] = this.fdata['name'];
          if (this.country == 'India') {
            this.imgpic = '../../assets/indicon.png';
          }
          if (this.country == 'England') {
            this.imgpic = '../../assets/engicon.png';
          }
          this.recdata['imgflag'] = this.imgpic;
          this.recsdata.push(this.recdata);
          this.recdata = [];

          this.cplayerservice.getNews().subscribe(data => {
            this.obj = data;
            console.log(this.obj);
            for (let i = 0; i < Object.keys(data['articles']).length; i++) {
              this.date = this.obj['articles'][i]['publishedAt'].substr(0, 10);
              var a = new Date(this.date);
              this.news['title'] = this.obj['articles'][i]['title'];
              this.news['description'] = this.obj['articles'][i]['description'];
              this.news['urlToImage'] = this.obj['articles'][i]['urlToImage'];
              this.news['publishedAt'] = a;
              this.newsList.push(this.news);
              this.news = [];
            }
            console.log("newsss");
            console.log(this.newsList);
          }, error => {
            console.log(error);
          })

        },
        error => {
          console.log(error);
        });

    }
    console.log(this.recsdata);
  }

  searchSubmit() {
    this.recflag = true;
    this.recsdata = [];
    this.searchResultsImg = [];
    console.log("search value");
    console.log(this.searchForm.value.search);
    this.cplayerservice.getByPlayerName(this.searchForm.value.search).subscribe(
      data => {
        this.fdata = data;
        console.log(this.fdata);
        this.playersdata = this.fdata['data'];
        console.log(this.playersdata.length);
        for (let i = 0; i < this.playersdata.length; i++) {
          console.log(this.playersdata[i]['fullName']);
          console.log(this.playersdata[i]['pid']);


          this.cplayerservice.getPlayerStastics(this.playersdata[i]['pid']).subscribe(
            data => {

              // console.log("player data");
              // console.log(data);
              console.log(data);
              this.imageurl = data['imageURL'];
              this.profile = data['profile'];
              console.log(this.imageurl);
              if (this.profile == "") { }
              else {
                if (this.imageurl !== null) {
                  this.searchResultImg['fullName'] = this.playersdata[i]['fullName'];
                  this.searchResultImg['pid'] = this.playersdata[i]['pid'];
                  this.searchResultImg['imageurl'] = this.imageurl;
                  this.searchResultImg['profile'] = this.profile;
                  this.searchResultsImg.push(this.searchResultImg);
                  this.searchResultImg = [];
                }
                else {
                  this.searchResult['fullName'] = this.playersdata[i]['fullName'];
                  this.searchResult['pid'] = this.playersdata[i]['pid'];
                  this.searchResults.push(this.searchResult);
                  this.searchResult = [];
                }
              }
              // if(this.imageurl!==null)
              // {
              //   this.searchResult['imageurl']=this.imageurl;
              // }
            },
            error => {
              console.log(error);
            }
          );

        }
        console.log("Results");
        console.log(this.searchResultsImg);
        console.log(this.searchResults);
      },
      error => {
        console.log(error);
      }
    )
  }

  knowmore(id) {
    this.cplayerservice.setPlayerid(id);
    this.routerservice.routeToViewdetails();
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

  imgSubmit() {
    console.log("imggg callled");
    this.loginflag = false;
    this.userImage = null;
    sessionStorage.removeItem('key');
  }

  details(id) {
    this.cplayerservice.setPlayerid(id);
    this.routerservice.routeToViewdetails();
  }
}
