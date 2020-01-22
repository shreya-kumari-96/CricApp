import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CplayerService } from '../cplayer.service';
import { RouterService } from '../router.service';
import { ViewdetailsComponent } from '../viewdetails/viewdetails.component';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-player-stastics',
  templateUrl: './player-stastics.component.html',
  styleUrls: ['./player-stastics.component.css']
})
export class PlayerStasticsComponent implements OnInit {

  imgForm: FormGroup;
  loginflag: boolean = false;
  searchForm: FormGroup;
  search = new FormControl();
  fdata: Array<any> = [];
  indplayers: Array<any> = [];
  engplayers: Array<any> = [];
  players: Array<any> = [];
  iplayeridlist: Array<any> = [];
  eplayeridlist: Array<any> = [];
  enplayers: Array<any> = [];
  playeridlist: Array<any> = [];
  playerdata: Array<any> = [];
  bowlerlist: Array<any> = [];
  fbowlerlist: Array<any> = [];
  finalbowlerlist: Array<any> = [];
  allrounderlist: Array<any> = [];
  batsmanlist: Array<any> = [];
  fbatsmanlist: Array<any> = [];
  finalbatsmanlist: Array<any> = [];
  datalength: number = 0;
  role: String;
  playerid: number;
  viewdetailsdata: ViewdetailsComponent;
  userImage: string;
  key: string;

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
        console.log(this.userImage);
      });
    }


        this.cplayerservice.getPlayers().subscribe(
          data => {
            this.fdata = data;
            console.log("Fetch data");
            // console.log(this.fdata['squad'][0]['players']);
            this.indplayers = this.fdata['squad'][0]['players'];
            this.enplayers = this.fdata['squad'][1]['players'];
            this.engplayers = this.enplayers.slice(1, this.enplayers.length);


            for (let i = 0; i < this.indplayers.length; i++) {
              this.indplayers[i]['country'] = "India";
            }
            for (let i = 0; i < this.engplayers.length; i++) {
              this.engplayers[i]['country'] = "England";
            }
            console.log(this.indplayers);
            console.log(this.engplayers);
            this.players = this.indplayers.concat(this.engplayers);
            console.log(this.players);
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


  searchSubmit() {

    this.routerservice.routeToDashboard();
  }

 
}
