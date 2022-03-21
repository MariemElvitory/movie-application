import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {

  id:string='';
 movieDetails:any={};
 img:string='https://image.tmdb.org/t/p/w500'


  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService )  {
    this.id=_ActivatedRoute.snapshot.params['id'];
   }

  ngOnInit(): void {

    this. _MoviesService.getMovieDetails(this.id).subscribe((response)=>{
    this.movieDetails=response;

    })
  }

}
