import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayersComponent } from './add-players/add-players.component';
import { ShowAllPlayersComponent } from './show-all-players/show-all-players.component';
import { UpdatePlayersComponent } from './update-players/update-players.component';

const routes: Routes = [
  { path: '', redirectTo: 'show-all-players', pathMatch: 'full' },
  { path: 'add-players', component: AddPlayersComponent },
  { path: 'show-all-players', component: ShowAllPlayersComponent },
  { path: 'update-players', component: UpdatePlayersComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
