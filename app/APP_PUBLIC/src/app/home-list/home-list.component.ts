import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
   providers: [MovieDataService]
})
export class HomeListComponent implements OnInit {
     movies: Movie[]

  constructor(private movieService: MovieDataService) { }

  ngOnInit() {
  this.movieService
      .getMoviess()
      .then((movies: Movie[]) => {
        this.movies = movies.map(movie => {
          return movie;
        });
      });
  }

}
