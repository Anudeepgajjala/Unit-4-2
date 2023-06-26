import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-players',
  templateUrl: './add-players.component.html',
  styleUrls: ['./add-players.component.css'],
})
export class AddPlayersComponent {
  data: any = [];
  constructor(private routes: Router, private apiService: ApiService) {}

  ngOnInit(): void {}

  insertPlayer(
    name: string,
    matches: any,
    runs: any,
    ballsFaced: any,
    battingStrikeRate: any
  ) {
    this.apiService
      .insertPlayer({
        name: name,
        matches: matches,
        runs: runs,
        ballsFaced: ballsFaced,
        battingStrikeRate: battingStrikeRate,
      })
      .subscribe((response: any) => {
        this.data = response?.response;
      });
    this.routes.navigate(['/show-all-players']);
  }
  AddPlayer(
    name: string,
    matches: any,
    runs: any,
    ballsFaced: any,
    battingStrikeRate: any
  ) {
    this.insertPlayer(name, matches, runs, ballsFaced, battingStrikeRate);
  }
}
