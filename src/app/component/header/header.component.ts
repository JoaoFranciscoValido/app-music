import { Component, OnInit } from '@angular/core';
import { FavService } from 'src/app/service/fav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;
  public searchTerm : string = '';
  constructor(private favService : FavService) {  }

  ngOnInit(): void {
    this.favService.getMusics()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.favService.search.next(this.searchTerm);
  }

}
