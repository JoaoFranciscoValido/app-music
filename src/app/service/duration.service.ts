import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DurationService {

  public durItemList : any =[]
  public musicList = new BehaviorSubject<any>([]);

  constructor() { }
  getMusics(){
    return this.musicList.asObservable();
  }

  addDuration(music : any){
    this.durItemList.push(music);
    this.musicList.next(this.durItemList);
    console.log(this.durItemList)
  }
}
