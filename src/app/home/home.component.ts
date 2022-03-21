import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trendingMovies:any[]=[];
  trendingTvs:any[]=[];
  trendingPerson:any[]=[];
 img:string='https://image.tmdb.org/t/p/w500'


  constructor(private _MoviesService: MoviesService) { }

  ngOnInit(): void {
this. _MoviesService.getTrending('movie').subscribe((response)=>{

  this.trendingMovies=response.results.slice(0,10);
})

this. _MoviesService.getTrending('tv').subscribe((response)=>{

  this.trendingTvs=response.results.slice(0,10)
})


this. _MoviesService.getTrending('person').subscribe((response)=>{

  this.trendingPerson=response.results.slice(0,10)
})


  }

}
