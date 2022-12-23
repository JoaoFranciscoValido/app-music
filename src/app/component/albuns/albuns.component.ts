import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { FavService } from 'src/app/service/fav.service';
import { DurationService } from 'src/app/service/duration.service';
import ArtistJson from 'src/app/artists_albuns.json';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.css']
})
export class AlbunsComponent implements OnInit {

  Artists: any =ArtistJson;

  myData: any;
  public albunList : any;
  searchKey : string = "";
  constructor(private api: ApiService, private favService : FavService, private durationService : DurationService) {
    console.log(this.Artists);
   }

  ngOnInit(): void {
    
      //this.api.getAlbun()
      //.subscribe(res=>{
      //  this.albunList = res;
     // })

      this.favService.search.subscribe((val:any)=>{
        this.searchKey = val;
      })
  }
  
  addtofav(item: any){
    this.favService.addtoFav(item);
  }

  duration(item: any){
    this.durationService.addDuration(item);
  }

}
