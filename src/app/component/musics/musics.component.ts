import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { FavService } from 'src/app/service/fav.service';
import ArtistJson from 'src/app/artists_albuns.json';

@Component({
  selector: 'app-musics',
  templateUrl: './musics.component.html',
  styleUrls: ['./musics.component.css']
})
export class MusicsComponent implements OnInit {

  Artists: any =ArtistJson;

  public musicList : any;
  public filterAlbun : any;
  searchKey : string = "";
  constructor(private api: ApiService, private favService : FavService) { }

  ngOnInit(): void {
      this.api.getMusic()
      .subscribe(res=>{
        this.musicList = res;

        this.musicList.forEach((a:any) => {
          Object.assign(a,{musicInAlbun:0})
        });
      })
      this.favService.search.subscribe((val:any)=>{
        this.searchKey = val;
      })
  }
  
  addtofav(item: any){
    this.favService.addtoFav(item);
  }
}
