import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public insertPlayer(body: any) {
    return this.http.post('http://localhost:8080/insert-player', body);
  }
  public updatePlayer(body: any) {
    return this.http.post('http://localhost:8080/update-player', body);
  }
  public findPlayer(body: any) {
    return this.http.post('http://localhost:8080/find-player', body);
  }
  public deletePlayer(id: any) {
    return this.http.delete(`http://localhost:8080/delete-player/${id}`);
  }
  public getAllPlayers() {
    console.log('***************');
    return this.http.get('http://localhost:8080/find-all-players');
  }
  public whoPlayedLeastMatches() {
    return this.http.get('http://localhost:8080/who-played-least-matches');
  }
  public playersListByRuns() {
    return this.http.get('http://localhost:8080/players-list-by-runs');
  }
  public whoScoredHighestRuns() {
    return this.http.get('http://localhost:8080/who-scored-highest-runs');
  }
  public whoFacedMoreBalls() {
    return this.http.get('http://localhost:8080/who-faced-more-balls');
  }
  public whoIsHavingLeastBattingStrikeRate() {
    return this.http.get(
      'http://localhost:8080/who-is-having-least-batting-strike-rate'
    );
  }
}
