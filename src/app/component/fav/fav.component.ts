import { Component, OnInit } from '@angular/core';
import { FavService } from 'src/app/service/fav.service';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit{

  public musics : any = [];
  constructor(private favService : FavService) {}

  ngOnInit(): void {
    this.favService.getMusics()
    .subscribe(res=>{
      this.musics = res;
    })
  }

  removeItem(item: any){
    this.favService.removeFavItem(item);
  }

}
