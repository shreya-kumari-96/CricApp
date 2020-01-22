import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { fav } from './fav';
import {rec} from './rec';

@Injectable({
  providedIn: 'root'
})
export class CplayerService {

  playerid: number;
  matchid:number;
  
  // private baseUrl = 'http://localhost:8080/api/cplayer';
  constructor(private httpClient: HttpClient) { }

  getPlayers(): Observable<any> {
    return this.httpClient.get<Array<any>>(`https://cricapi.com/api/fantasySquad?apikey=z61oC5oKbDMk5mhr4so60rXOCsE2&unique_id=1034809`);
  }

  getPlayerStastics(id): Observable<any> {
    return this.httpClient.get<Array<any>>(`https://cricapi.com/api/playerStats?apikey=z61oC5oKbDMk5mhr4so60rXOCsE2&pid=${id}`);
  }

  getByPlayerName(name): Observable<any> {
    return this.httpClient.get<Array<any>>(`https://cricapi.com/api/playerFinder?apikey=z61oC5oKbDMk5mhr4so60rXOCsE2&name=${name}`);
  }

  getUpcomingMatches() {
    return this.httpClient.get<Array<any>>(`http://cricapi.com/api/matches?apikey=z61oC5oKbDMk5mhr4so60rXOCsE2`);
  }

  getScore(id)
  {
    return this.httpClient.get<Array<any>>(`https://cricapi.com/api/cricketScore?apikey=z61oC5oKbDMk5mhr4so60rXOCsE2&unique_id=${id}`);
  }

  getMatch(id)
  {
    return this.httpClient.get<Array<any>>(`https://cricapi.com/api/fantasySummary?apikey=z61oC5oKbDMk5mhr4so60rXOCsE2&unique_id=${id}`);
  }

  getNews() {
    return this.httpClient.get<Array<any>>(`https://newsapi.org/v2/everything?q="cricket" &apiKey=0c09e9f0001a4a5998675658f90c0088&sortBy=publishedAt`);
  }

  setMatchid(id) {
    this.matchid = id;
  }

  getMatchid(): number {
    return this.matchid;
  }

  setPlayerid(id) {
    this.playerid = id;
  }

  getPlayerid(): number {
    return this.playerid;
  }

  
  addFavourite(fav: fav): Observable<Object> {
    return this.httpClient.post('http://localhost:8001/api/cplayer' + `/addFav`, fav);
  }

  getFavourite(userid): Observable<Array<fav>> {
    return this.httpClient.get<Array<fav>>('http://localhost:8001/api/cplayer'+`/fav/`+`${userid}`);
  }

  delFavourite(userid,pid):Observable<any>{
    return this.httpClient.delete('http://localhost:8001/api/cplayer'+`/delFav/`+`${userid}`+`/`+`${pid}`);
  }

  addRec(rec: rec): Observable<Object> {
    return this.httpClient.post('http://localhost:8003/api/cplayer' + `/addRec`, rec);
  }

  getRec(userid): Observable<Array<rec>> {
    return this.httpClient.get<Array<rec>>('http://localhost:8003/api/cplayer'+`/rec/`+`${userid}`);
  }

  delRec(userid,pid):Observable<any>{
    console.log("del service");
    return this.httpClient.delete('http://localhost:8003/api/cplayer'+`/delRec/`+`${userid}`+`/`+`${pid}`);
  }
}
