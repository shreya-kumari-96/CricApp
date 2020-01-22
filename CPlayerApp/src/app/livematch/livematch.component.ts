import { Component, OnInit } from '@angular/core';
import { CplayerService } from '../cplayer.service';
import {RouterService} from '../router.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-livematch',
  templateUrl: './livematch.component.html',
  styleUrls: ['./livematch.component.css']
})
export class LivematchComponent implements OnInit {

  searchForm: FormGroup;
  search = new FormControl();
  currentMatches:Array<any> = [];
  matches:Array<any> = [];
  obj: Array<any> = [];
  i:number;
  team_1: String;
  team_2: String;
  date: string;
  totalMatches: number;
  uniqueId: number;
  score: any;
  flag: boolean;
  constructor(private apiService: CplayerService, private routerservice:RouterService) { }
  ngOnInit() {

    this.search = new FormControl('', [Validators.required])
    this.searchForm = new FormGroup({
      search: this.search
    });

    this.apiService.getUpcomingMatches().subscribe(data =>{
      this.obj=data;
      var today = new Date();
      this.totalMatches = this.obj['matches'].length;
      for (this.i = 0; this.i < this.totalMatches; this.i++) {
        this.date = this.obj['matches'][this.i]['date'].substr(0,10);
        var a = new Date(this.date);
        if(a.getDate() == today.getDate()){
          //this.uniqueId = this.obj['matches'][this.i]['unique_id'];
          this.matches['unique_id'] = this.obj['matches'][this.i]['unique_id'];
          this.matches['team_1'] = this.obj['matches'][this.i]['team-1'];
          this.matches['team_2'] = this.obj['matches'][this.i]['team-2'];
          this.matches['type'] = this.obj['matches'][this.i]['type'];
          this.matches['date'] = this.date;
          this.currentMatches.push(this.matches);
          this.matches = [];
          
        }
    }
    console.log(this.currentMatches);
  });
}
// getScore(id : any) {
//   this.flag = true;
//   this.apiService.getScoreById(id).subscribe(data=>{
//     console.log(data['score']);
//     this.score = data['score'];
//     alert(this.score);
//   });
//   console.log(id)
//   console.log("hello");
// }
// toggleDisplay() {
//   this.flag = !this.flag;
// }

viewDetails(id)
{
  this.apiService.setMatchid(id);
  this.routerservice.routeToViewlivematch();
}
searchSubmit() {
    this.routerservice.routeToDashboard();
  }
}
