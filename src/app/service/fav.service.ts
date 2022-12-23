import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavService {

  public favItemList : any =[]
  public musicList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  getMusics(){
    return this.musicList.asObservable();
  }
  
  setMusic(music : any){
    this.favItemList.push(...music);
    this.musicList.next(music);
  }

  addtoFav(music : any){
    this.favItemList.push(music);
    this.musicList.next(this.favItemList);
    console.log(this.favItemList)
  }

  

  removeFavItem(music: any){
    this.favItemList.map((a:any, index:any)=>{
      if(music.name === a.name){
        this.favItemList.splice(index,1);
        console.log(this.favItemList)
      }
    })
    this.musicList.next(this.favItemList);
  }

}
