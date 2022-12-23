import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FavComponent } from './component/fav/fav.component';
import { MusicsComponent } from './component/musics/musics.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './shared/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlbunsComponent } from './component/albuns/albuns.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FavComponent,
    MusicsComponent,
    FilterPipe,
    AlbunsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
