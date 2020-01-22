import { Component, OnInit } from '@angular/core';
import { CplayerService } from '../cplayer.service';
import {RouterService} from '../router.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchForm: FormGroup;
  search = new FormControl();
  fdata: Array<any> = [];
  indplayers: Array<any> = [];
  engplayers: Array<any> = [];
  players: Array<any> = [];
  iplayeridlist: Array<any> = [];
  eplayeridlist: Array<any> = [];
  playeridlist: Array<any> = [];
  playerdata: Array<any> = [];
  bowlerlist: Array<any> = [];
  fbowlerlist: Array<any> = [];
  finalbowlerlist: Array<any> = [];
  allrounderlist: Array<any> = [];
  batsmanlist: Array<any> = [];
  fbatsmanlist: Array<any> = [];
  finalbatsmanlist: Array<any> = [];
  Odifbowlerlist:Array<any>=[];
  Odifinalbowlerlist:Array<any>=[];
  Odifbatsmanlist:Array<any>=[];
  Odifinalbatsmanlist:Array<any>=[];
  T20fbowlerlist:Array<any>=[];
  T20finalbowlerlist:Array<any>=[];
  T20fbatsmanlist:Array<any>=[];
  T20finalbatsmanlist:Array<any>=[];
  datalength: number = 0;
  role: String;
  playerid: number;
  country:string;
  img:string;

  constructor(private cplayerservice: CplayerService, private routerservice:RouterService) { }

  ngOnInit() {

    this.search = new FormControl('', [Validators.required])
    this.searchForm = new FormGroup({
      search: this.search
    });

    
    console.log("On init called");
    this.cplayerservice.getPlayers().subscribe(
      data => {
        this.fdata = data;
        console.log("Fetch data");
        // console.log(this.fdata['squad'][0]['players']);
        this.indplayers = this.fdata['squad'][0]['players'];
        this.engplayers = this.fdata['squad'][1]['players'];


        this.players = this.fdata['squad'][0]['players'];

        console.log(this.players);

        for (let i = 0; i < this.players.length; i++) {
          this.playeridlist[i] = this.players[i]['pid'];
        }

        for (let i = 0; i < this.indplayers.length; i++) {
          this.iplayeridlist[i] = this.indplayers[i]['pid'];
        }
        for (let i = 1; i < this.engplayers.length; i++) {
          this.eplayeridlist[i] = this.engplayers[i]['pid'];
        }
        // console.log(this.iplayeridlist);
        // console.log(this.eplayeridlist);
        this.playeridlist = this.iplayeridlist.concat(this.eplayeridlist);
        console.log(this.eplayeridlist);
        console.log(this.playeridlist);

        for (let i = 0; i < this.playeridlist.length; i++) {
          this.cplayerservice.getPlayerStastics(this.playeridlist[i]).subscribe(
            data => {
              console.log("player list")
              console.log(this.playeridlist[i]);
              // console.log(data);
              this.playerdata[i] = data;
              // this.datalength=data.length;
              // console.log(this.datalength);
              this.country=this.playerdata[i]['country'];
              console.log(this.country);
              if(this.country=='India'){
                this.img='../../assets/indicon.png';
              }
              if(this.country=="England"){
                  this.img='../../assets/engicon.png';
                }
              console.log(this.playerdata[i]['playingRole']);
              this.role = this.playerdata[i]['playingRole'];
              if (this.role != null) {
                if (this.role == 'Bowler' || this.role.includes('Bowling')) {
                  this.bowlerlist.push(this.playerdata[i]);
                  this.playerid = this.playerdata[i]['pid'];
                  this.fbowlerlist['key'] = this.playerdata[i];
                  this.fbowlerlist['value'] = this.playerdata[i]['data']['bowling']['tests']['Econ'];
                  this.fbowlerlist['img']=this.img;
                  console.log("final data");
                  // console.log(this.fbowlerlist);
                  this.finalbowlerlist.push(this.fbowlerlist);
                  this.fbowlerlist = [];
                  // console.log(this.finalbowlerlist);
                  console.log(this.bowlerlist);
                  console.log(this.finalbowlerlist.sort(this.compare));
                  // console.log(this.fbowlerlist.sort());

                  // this.bowlerlist.push(this.playerdata[i]);
                  // this.playerid = this.playerdata[i]['pid'];
                  this.Odifbowlerlist['key'] = this.playerdata[i];
                  this.Odifbowlerlist['value'] = this.playerdata[i]['data']['bowling']['ODIs']['Econ'];
                  this.Odifbowlerlist['img']=this.img;
                  console.log("final ODI data");
                  // console.log(this.fbowlerlist);
                  this.Odifinalbowlerlist.push(this.Odifbowlerlist);
                  this.Odifbowlerlist = [];
                  // console.log(this.finalbowlerlist);
                  // console.log(this.bowlerlist);
                  console.log(this.Odifinalbowlerlist.sort(this.compare));
                  
                  this.T20fbowlerlist['key'] = this.playerdata[i];
                  this.T20fbowlerlist['value'] = this.playerdata[i]['data']['bowling']['T20Is']['Econ'];
                  this.T20fbowlerlist['img']=this.img;
                  console.log("final T20 data");
                  // console.log(this.fbowlerlist);
                  this.T20finalbowlerlist.push(this.T20fbowlerlist);
                  this.T20fbowlerlist = [];
                  // console.log(this.finalbowlerlist);
                  // console.log(this.bowlerlist);
                  console.log(this.T20finalbowlerlist.sort(this.compare));
                }
                if (this.role == 'Allrounder' || this.role.includes('allrounder')) {
                  this.playerdata[i]['img']=this.img;
                  this.allrounderlist.push(this.playerdata[i]);
                }
                if (this.role.includes('batsman') || this.role.includes('Batting')) {
                  this.batsmanlist.push(this.playerdata[i]);
                  this.playerid = this.playerdata[i]['pid'];
                  this.fbatsmanlist['key'] = this.playerdata[i];
                  this.fbatsmanlist['value'] = this.playerdata[i]['data']['batting']['tests']['SR'];

                  this.fbatsmanlist['img']=this.img;
                  console.log("final batsman data");
                  // console.log(this.fbowlerlist);
                  this.finalbatsmanlist.push(this.fbatsmanlist);
                  this.fbatsmanlist = [];
                  // console.log(this.finalbowlerlist);
                  console.log(this.batsmanlist);
                  console.log(this.finalbatsmanlist.sort(this.compare));
                  console.log(this.finalbatsmanlist.reverse());

                  this.Odifbatsmanlist['key'] = this.playerdata[i];
                  this.Odifbatsmanlist['value'] = this.playerdata[i]['data']['batting']['ODIs']['SR'];
                  this.Odifbatsmanlist['img']=this.img;
                  console.log("final ODI batsman data");
                  // console.log(this.fbowlerlist);
                  this.Odifinalbatsmanlist.push(this.Odifbatsmanlist);
                  this.Odifbatsmanlist = [];

                  console.log(this.Odifinalbatsmanlist.sort(this.compare));  
                  console.log(this.Odifinalbatsmanlist.reverse());  
                  
                  this.T20fbatsmanlist['key'] = this.playerdata[i];
                  this.T20fbatsmanlist['value'] = this.playerdata[i]['data']['batting']['T20Is']['SR'];
                  this.T20fbatsmanlist['img']=this.img;
                  console.log("final T20 batsman data");
                  // console.log(this.fbowlerlist);
                  this.T20finalbatsmanlist.push(this.T20fbatsmanlist);
                  this.T20fbatsmanlist = [];

                  console.log(this.T20finalbatsmanlist.sort(this.compare));  
                  console.log(this.T20finalbatsmanlist.reverse());  
                }
              }
              console.log("bowler list");
              console.log(this.bowlerlist);
              console.log(this.allrounderlist);
              console.log(this.batsmanlist);

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

  }


  compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const bandA = a.value;
    const bandB = b.value;

    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  }

  searchSubmit() {
    this.routerservice.routeToDashboard();
  }

  login()
  {
      this.routerservice.routeToLogin();
  }
}
