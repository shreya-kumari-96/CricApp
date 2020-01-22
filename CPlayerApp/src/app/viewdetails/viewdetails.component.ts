import { Component, OnInit } from '@angular/core';
import { CplayerService } from '../cplayer.service';
import { RouterService } from '../router.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { fav } from '../fav';
import { rec } from '../rec';
import { Chart } from 'chart.js';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {

  imgForm: FormGroup;
  userImage: string;
  searchForm: FormGroup;
  search = new FormControl();
  key: string;
  loginflag: boolean;
  chart: [];
  chart2: [];
  playerid: number;
  fdata: Array<any> = [];
  country: String;
  fullName: String;
  imageurl: String;
  battingstyle: String;
  bowlingstyle: String;
  currentage: String;
  born: String;
  majorteams: string;
  majordata: Array<any> = [];
  battingData: Array<any> = [];
  bowlingData: Array<any> = [];
  batODIData: Array<any> = [];
  batTestData: Array<any> = [];
  batT20Data: Array<any> = [];
  fbatdata: Array<any> = [];
  bowlODIData: Array<any> = [];
  bowlTestData: Array<any> = [];
  bowlT20Data: Array<any> = [];
  fbowldata: Array<any> = [];
  favobj: fav = new fav();
  recobj: rec = new rec();
  recdata: Array<any> = [];
  favdata: Array<any> = [];
  reccdata: Array<any> = [];
  favflag: boolean = false;
  reccflag: boolean = false;
  role: string;
  flag: boolean = false;
  bowl: boolean = false;
  bat: boolean = false;
  x1: number;
  x2: number;
  x3: number;

  y1: number;
  y2: number;
  y3: number;
  img: string;
  flipped: string;

  constructor(private cplayerservice: CplayerService, private routerservice: RouterService, private authservice: AuthenticationService) { }

  ngOnInit() {

    this.imgForm = new FormGroup({
    });

    this.search = new FormControl('', [Validators.required])
    this.searchForm = new FormGroup({
      search: this.search
    });

    if (sessionStorage.getItem('key') != null) {
      this.loginflag = true;
      this.key = sessionStorage.getItem('key');
      console.log(this.key);
      this.authservice.getOneUser(this.key).subscribe(data => {
        this.userImage = data.img;
        // console.log(this.userImage);
        this.flipped = "Recommend";  
      });
    }
    else {
      this.flipped = "Recommend";
    }

    this.playerid = this.cplayerservice.getPlayerid();
    // this.playerid=253802;
    console.log(this.playerid);

    // this.cplayerservice.getRec(this.key).subscribe(
    //   data => {
    //     console.log("Recc");
    //     this.recdata = data;
    //     console.log(this.recdata);

    console.log(sessionStorage.getItem('key'));
    this.cplayerservice.getPlayerStastics(this.playerid).subscribe(
      data => {
        this.fdata = data;
        console.log(this.fdata);
        this.imageurl = this.fdata['imageURL'];
        this.country = this.fdata['country'];
        this.fullName = this.fdata['fullName'];
        this.currentage = this.fdata['currentAge'];
        this.born = this.fdata['born'];
        this.battingstyle = this.fdata['battingStyle'];
        this.bowlingstyle = this.fdata['bowlingStyle'];

        this.battingData = this.fdata['data']['batting'];
        this.bowlingData = this.fdata['data']['bowling'];

        this.majorteams = this.fdata['majorTeams'];
        console.log(this.majorteams);
        this.majordata = this.majorteams.split(",");
        console.log(this.majordata);

        if (this.country == 'India') {
          this.img = '../../assets/indicon.png';
        }
        if (this.country == "England") {
          this.img = '../../assets/engicon.png';
        }

        console.log(this.imageurl);
        console.log(this.country);
        console.log(this.fullName);
        console.log(this.battingData);
        console.log(this.bowlingData);

        this.batODIData = this.battingData['ODIs'];
        this.batODIData['type'] = 'ODIs';
        this.batTestData = this.battingData['tests'];
        this.batTestData['type'] = 'tests';
        this.batT20Data = this.battingData['T20Is'];
        this.batT20Data['type'] = 'T20Is';
        this.fbatdata.push(this.batODIData);
        this.fbatdata.push(this.batTestData);
        this.fbatdata.push(this.batT20Data);
        console.log(this.fbatdata);

        this.bowlODIData = this.bowlingData['ODIs'];
        this.bowlODIData['type'] = 'ODIs';
        this.bowlTestData = this.bowlingData['tests'];
        this.bowlTestData['type'] = 'tests';
        this.bowlT20Data = this.bowlingData['T20Is'];
        this.bowlT20Data['type'] = 'T20Is';
        this.fbowldata.push(this.bowlODIData);
        this.fbowldata.push(this.bowlTestData);
        this.fbowldata.push(this.bowlT20Data);
        console.log(this.fbowldata);

        this.role = this.fdata['playingRole'];
        if (this.role != null) {

          if (this.role == 'Allrounder' || this.role.includes('allrounder')) {

            this.flag = true;
            // this.x4=this.battingData['ODIs']['Runs'];
            // this.x5=this.battingData['ODIs']['Runs'];
            this.x1 = this.bowlingData['T20Is']['Ave'];
            this.x2 = this.bowlingData['tests']['Ave'];
            this.x3 = this.bowlingData['ODIs']['Ave'];

            this.y1 = this.battingData['T20Is']['Ave'];
            this.y2 = this.battingData['tests']['Ave'];
            this.y3 = this.battingData['ODIs']['Ave'];
            // this.x4=this.battingData['ODIs']['Runs'];
            // this.x5=this.battingData['ODIs']['Runs'];
            this.chart = new Chart('barChart', {

              type: 'bar',
              data: {
                labels: ["ODI", "Test", "T20"],
                series: ["batting", "bowling"],

                datasets: [
                  {
                    backgroundColor: 'blue',
                    borderColor: 'blue',
                    data: [this.y3, this.y2, this.y1],
                    fill: false
                  },
                  {
                    backgroundColor: 'red',
                    borderColor: 'red',
                    data: [this.x3, this.x2, this.x1],
                    fill: false
                  }
                ]
              },
              options: {
                legend: {
                  display: false
                },
                scales: {
                  xAxes: [{
                    display: true
                  }],
                  yAxes: [{
                    scaleLabel: {
                      display: true,
                      labelString: 'Average Score of All matches',
                      fontColor: "black"
                    },
                    display: true,
                    ticks: {
                      // labels:"number of days",
                      beginAtZero: true,
                      stepSize: 10,
                      max: 100
                      // maxTicksLimit:10
                    }
                  }]
                }
              }
            });

            console.log(this.x1);
            console.log(this.x2);
            console.log(this.x3);
            console.log(this.y1);
            console.log(this.y2);
            console.log(this.y3);

          }
          else if (this.role == 'Bowler' || this.role.includes('Bowling')) {

            this.x1 = this.bowlingData['T20Is']['Ave'];
            this.x2 = this.bowlingData['tests']['Ave'];
            this.x3 = this.bowlingData['ODIs']['Ave'];
            // this.x4=this.battingData['ODIs']['Runs'];
            // this.x5=this.battingData['ODIs']['Runs'];
            this.bowl = true;
            this.chart = new Chart('barChart', {

              type: 'bar',
              data: {
                labels: ["ODI", "Test", "T20"],
                datasets: [
                  {
                    backgroundColor: 'red',
                    borderColor: 'red',
                    barThickness: 70,
                    data: [this.x1, this.x2, this.x3],
                    fill: false
                  }
                ]
              },
              options: {
                legend: {
                  display: false
                },
                scales: {
                  xAxes: [{
                    display: true
                  }],
                  yAxes: [{
                    scaleLabel: {
                      display: true,
                      labelString: 'Average Score of All matches',
                      fontColor: "black"
                    },
                    display: true,
                    ticks: {
                      // labels:"number of days",
                      beginAtZero: true,
                      stepSize: 10,
                      max: 100
                      // maxTicksLimit:10
                    }
                  },

                  ]
                }
              }
            });

          }

          else if (this.role.includes('batsman') || this.role.includes('Batting')) {

            this.x1 = this.battingData['ODIs']['Ave'];
            this.x2 = this.battingData['tests']['Ave'];
            this.x3 = this.battingData['T20Is']['Ave'];
            // this.x4=this.battingData['ODIs']['Runs'];
            // this.x5=this.battingData['ODIs']['Runs'];
            this.bat = true;
            this.chart = new Chart('barChart', {

              type: 'bar',
              data: {
                labels: ["ODI", "Test", "T20"],
                datasets: [
                  {
                    backgroundColor: 'blue',
                    borderColor: 'blue',
                    barThickness: 70,
                    data: [this.x1, this.x2, this.x3],
                    fill: false
                  }
                ]
              },
              options: {
                legend: {
                  display: false
                },
                scales: {
                  xAxes: [{

                    display: true
                  }],
                  yAxes: [{
                    scaleLabel: {
                      display: true,
                      labelString: 'Average Score of All matches',
                      fontColor: "black"
                    },
                    display: true,
                    ticks: {

                      beginAtZero: true,
                      stepSize: 10,
                      max: 100
                      // maxTicksLimit:10
                    }
                  }]
                }
              }
            });


          }
          else {
            console.log("no role");
          }
        }
        console.log(this.flag);

        console.log(sessionStorage.getItem('key'));
        this.cplayerservice.getRec(this.key).subscribe(
          data => {
            console.log("Recc");
            this.recdata = data;
            console.log(this.recdata);
            for (let i = 0; i < this.recdata.length; i++) {
              if (this.recdata[i]['userid'] == sessionStorage.getItem('key') && this.recdata[i]['pid'] == this.playerid) {
                console.log("existtttt");
                this.flipped = "Unrecommend";
              }
              else {
                this.flipped = "Recommend";
              }
            }
          },
          error => {
            console.log(error);
          }
        );
      },
      error => {
        console.log(error);
      }

    );
    // });
  }




  addFav() {
    let key = sessionStorage.getItem('key');
    console.log("Key: ");
    console.log(key);
    if (key === null) {
      this.routerservice.routeToLogin();
    }
    else {
      this.cplayerservice.getPlayerStastics(this.playerid).subscribe(
        rdata => {
          this.fdata = rdata;
          
          this.cplayerservice.getFavourite(this.key).subscribe(
            data => {
              console.log("favvv");
              this.favdata = data;
              console.log(this.favdata);

              if(this.favdata.length==0)
              {
                this.favflag=true;
              }

              for (let i = 0; i < this.favdata.length; i++) {
                if (this.favdata[i]['pid'] == this.playerid && this.favdata[i]['userid'] == key) {
                  this.favflag=false;
                  console.log("existtt");
                  alert("Already added to favourite.");
                }
                else {
                  this.favflag = true;
                }
              }
              console.log(this.favflag);
              if (this.favflag == true) {
                this.playerid = this.cplayerservice.getPlayerid();
                this.favobj['pid'] = this.playerid;
                this.favobj['name'] = this.fdata['name'];
                this.favobj['country'] = this.fdata['country'];
                this.favobj['userid'] = sessionStorage.getItem("key");
                console.log(this.favobj.pid);
                console.log(this.favobj.name);
                console.log(this.favobj.country);
                console.log(this.favobj.userid);

                this.cplayerservice.addFavourite(this.favobj).subscribe(
                  data => {
                    alert("Added to favourite.");
                    console.log("add to fav called");
                  },
                  error => {
                    console.log(error);
                  }

                );

              }
            });
        },
        error => {
          console.log(error);
        }

      );
    }
  }

  login() {
    this.routerservice.routeToLogin();
  }

  logoutSubmit() {
    this.loginflag = false;
    this.userImage = null;
    sessionStorage.removeItem('key');
    this.routerservice.routeToDashboard();
  }

  addRec() {
    let key = sessionStorage.getItem('key');
    console.log("Key: ");
    console.log(key);
    if (key === null) {
      this.routerservice.routeToLogin();
    }
    else {
      this.flipped = "Unrecommend";
      this.cplayerservice.getPlayerStastics(this.playerid).subscribe(
        tdata => {

          this.cplayerservice.getRec(this.key).subscribe(
            data => {
              console.log("Reccc");
              this.reccdata = data;
              console.log(this.reccdata);

              if(this.reccdata.length==0)
              {
                this.reccflag=true;
              }

              for (let i = 0; i < this.reccdata.length; i++) {
                if (this.reccdata[i]['pid'] == this.playerid && this.reccdata[i]['userid'] == key) {
                  console.log("existtt");
                  this.reccflag=false;
                }
                else {
                  this.reccflag = true;
                }
              }

              if (this.reccflag == true) {
                this.fdata = tdata;
                this.recobj['pid'] = this.playerid;
                this.recobj['name'] = this.fdata['name'];
                this.recobj['country'] = this.fdata['country'];
                this.recobj['userid'] = sessionStorage.getItem("key");
                this.recobj['imageurl'] = this.fdata['imageURL'];
                console.log(this.recobj.pid);
                console.log(this.recobj.name);
                console.log(this.recobj.country);
                console.log(this.recobj.userid);
                console.log(this.recobj.imageurl);

                this.cplayerservice.addRec(this.recobj).subscribe(
                  data => {
                    console.log("add to rec done");
                  },
                  error => {
                    console.log(error);
                  }
                );
              }
            },
            error => {
              console.log(error);
            }
          );
        });
    }
  }

  searchSubmit() {
    this.routerservice.routeToDashboard();
  }



}