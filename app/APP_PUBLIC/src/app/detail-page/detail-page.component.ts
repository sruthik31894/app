import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieDataService } from '../movie-data.service';
import { Movie } from '../movie';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css'],
  providers: [MovieDataService]
})
export class DetailPageComponent implements OnInit {

  constructor(
     private movieDataService: MovieDataService,
    private route: ActivatedRoute
  ) { }
  newMovie: Movie;
  ngOnInit(): void {
        this.route.params.pipe ( 
        switchMap((params: Params) => {
        return this.movieDataService.getSingleMovie(params['movieid'])
        }))
        .subscribe((newMovie: Movie) => {
            this.newMovie = newMovie;
            this.pageContent.header.title = newMovie.name;
            this.pageContent.header.body= "Detailes for Selected Movies";
        });
  }
  pageContent = {
    header : {
        title : '',
        body : ''
    }
  };

  goToEdit(newMovie:Movie){
    console.log(newMovie);
    location.replace('/edit/'+newMovie._id);
  }

  

}
