import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Http, Response } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

    private moviesUrl = 'http://localhost:3000/api/movies';
    private editUrl = 'http://localhost:3000/api/editmovie';
  constructor(private http: Http) { }
  // get("/api/movies")
    getMoviess(): Promise<void | Movie[]> {
      return this.http.get(this.moviesUrl)
                 .toPromise()
                 .then(response => response.json() as Movie[])
                 .catch(this.handleError);         
         }

         getSingleMovie(movieId: String): Promise<void | Movie>
         {
            return this.http.get(this.moviesUrl + '/' + movieId)
                       .toPromise()
                       .then(response => response.json() as Movie)
                       .catch(this.handleError);
         }
         
         createMovie(newMovie: Movie): Promise<void | Movie> {
            return this.http.post(this.moviesUrl, newMovie)
                        .toPromise()
                        .then(response => response.json() as Movie)
                        .catch(this.handleError);
         }

         updateMovie(movie:Movie):Promise<void|Movie>{
          console.log(movie);
          return this.http.put(this.moviesUrl+'/'+movie._id, movie)
                     .toPromise()
                     .then(response=>response.json() as Movie)
                     .catch(this.handleError);
        }
        deleteMovie(movie:Movie):Promise<void|string>{
          
            return this.http.delete(this.moviesUrl+'/'+movie._id)
                      .toPromise()
                      .then(response=>response.json() as string)
                      .catch(this.handleError);
          
        }

        updateEditedMovie(movie:Movie):Promise<void|Movie>{
          console.log(movie);
          return this.http.put(this.moviesUrl+'/'+movie._id, movie)
                     .toPromise()
                     .then(response=>response.json() as Movie)
                     .catch(this.handleError);
        }
      

        private handleError (error: any) {
        console.log("error");
    }
}
