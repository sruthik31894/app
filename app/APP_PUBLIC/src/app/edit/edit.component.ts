import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { MovieDataService } from '../movie-data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [MovieDataService]
})
export class EditComponent implements OnInit {

  @Input()  
  movie:Movie;

  movie1:Movie;
  newMovie:Movie;
  public moviess;

  constructor(private moviedataService:MovieDataService,
              private route:ActivatedRoute) { }


       
  ngOnInit():void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.moviedataService.getSingleMovie(params['movieid'])
      })
    )
      .subscribe((newMovie: Movie) => {
        this.newMovie = newMovie;
        this.pageContent.header.title = newMovie.name;
        this.pageContent.header.body = 'Details for selected movie';
        console.log(newMovie);

      });
     
  }

  
  updateMovies(newMovie):void{
    
  
      this.moviedataService.updateEditedMovie(newMovie)
      alert("Updated Successfully")
      location.replace('/');

    
    

  }

  
  deleteMovies(newMovie):void{
    console.log("in delete",newMovie);

    
      this.moviedataService.deleteMovie(newMovie)
      alert("Deleted Successfully")
      location.replace('/');
    
    
  }
    pageContent={
      header:{
        title:'',
        body:''
      }
    };
   


}

