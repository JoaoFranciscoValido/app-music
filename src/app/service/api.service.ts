import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http : HttpClient) { }

  getMusic(){
    return this.http.get<any>("http://localhost:3000/musics?_expand=albun")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getAlbun(){
    return this.http.get<any>("http://localhost:3000/albuns")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
