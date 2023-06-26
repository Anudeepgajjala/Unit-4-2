import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-players',
  templateUrl: './update-players.component.html',
  styleUrls: ['./update-players.component.css'],
})
export class UpdatePlayersComponent {
  data: any = [];
  constructor(private apiService: ApiService, private routes: Router) {}

  ngOnInit(): void {
    this.data = window.history.state;
  }
  updatePlayer(
    player_id: string,
    name: string,
    matches: any,
    runs: any,
    ballsFaced: any,
    battingStrikeRate: any
  ) {
    this.apiService
      .updatePlayer({
        player_id: player_id,
        name: name,
        matches: matches,
        runs: runs,
        ballsFaced: ballsFaced,
        battingStrikeRate: battingStrikeRate,
      })
      .subscribe((response: any) => {
        this.data = response?.response;
      });
  }
  Update(
    player_id: string,
    name: string,
    matches: any,
    runs: any,
    ballsFaced: any,
    battingStrikeRate: any
  ) {
    this.updatePlayer(
      player_id,
      name,
      matches,
      runs,
      ballsFaced,
      battingStrikeRate
    );
    this.routes.navigate(['/show-all-players']);
  }
}
