import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowAllPlayersComponent } from './show-all-players/show-all-players.component';
import { UpdatePlayersComponent } from './update-players/update-players.component';
import { AddPlayersComponent } from './add-players/add-players.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ShowAllPlayersComponent,
    UpdatePlayersComponent,
    AddPlayersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
