import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicsComponent } from './component/musics/musics.component';
import { AlbunsComponent } from './component/albuns/albuns.component';
import { FavComponent } from './component/fav/fav.component';

const routes: Routes = [
  {path:'', redirectTo: 'musics', pathMatch:'full'},
  {path:'', redirectTo: 'albuns', pathMatch:'full'},
  {path:'albuns', component: AlbunsComponent},
  {path:'musics', component: MusicsComponent},
  {path:'fav', component: FavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
