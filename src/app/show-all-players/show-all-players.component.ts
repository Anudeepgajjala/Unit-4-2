import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-show-all-players',
  templateUrl: './show-all-players.component.html',
  styleUrls: ['./show-all-players.component.css'],
})
export class ShowAllPlayersComponent {
  data: any = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getAllPlayers();
  }
  getAllPlayers() {
    this.apiService.getAllPlayers().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  whoPlayedLeastMatches() {
    this.apiService.whoPlayedLeastMatches().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  playersListByRuns() {
    this.apiService.playersListByRuns().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  whoScoredHighestRuns() {
    this.apiService.whoScoredHighestRuns().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  whoFacedMoreBalls() {
    this.apiService.whoFacedMoreBalls().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  whoIsHavingLeastBattingStrikeRate() {
    this.apiService
      .whoIsHavingLeastBattingStrikeRate()
      .subscribe((response: any) => {
        this.data = response?.response;
      });
  }
  DeletePlayer(id: any) {
    this.apiService.deletePlayer(id).subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  selectedFilter(value: string) {
    if (value === 'who-played-least-matches') {
      this.whoPlayedLeastMatches();
    } else if (value === 'players-list-by-runs') {
      this.playersListByRuns();
    } else if (value === 'who-scored-highest-runs') {
      this.whoScoredHighestRuns();
    } else if (value === 'who-faced-more-balls') {
      this.whoFacedMoreBalls();
    } else if (value === 'who-is-having-least-batting-strike-rate') {
      this.whoIsHavingLeastBattingStrikeRate();
    } else {
      this.getAllPlayers();
    }
  }
  deletePlayer(id: string) {
    this.DeletePlayer(id);
  }
}
