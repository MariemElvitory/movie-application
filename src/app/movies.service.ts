import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient ) { }


  getTrending(mediaType:string):Observable<any>
    {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=d95dca54ccf28e22199ed18fcea57b2a`)
    }


  getMovieDetails(id:string):Observable<any>
  {
  return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=d95dca54ccf28e22199ed18fcea57b2a&language=en-US`)
  }
}



