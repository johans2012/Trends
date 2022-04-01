import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayGameComponent } from './play-game/play-game.component';
import { ViewLienzoComponent } from './view-lienzo/view-lienzo.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { PlayerListComponent } from './player-list/player-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'play-game', pathMatch: 'full' },
  { path: 'play-game', component: PlayGameComponent },
  { path: 'view-lienzo', component: ViewLienzoComponent },
  { path: 'view-player', component: PlayerListComponent},
  { path: 'add-player', component: AddPlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
