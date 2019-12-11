import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieDataService } from '../movie-data.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [MovieDataService]
})
export class CreateComponent implements OnInit {

      public newMovie: {name: string; type: string}={
            name: '',
            type: ''
        };

  constructor(private movieDataService: MovieDataService) { }

  ngOnInit() {
  }
    public createNewMovie(newMovie: Movie):void {
        this.movieDataService.createMovie(newMovie);
  }

}
