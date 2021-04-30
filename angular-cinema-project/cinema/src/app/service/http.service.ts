import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl: string = 'https://testserver/zsofiella/movies';

  constructor(
    private http: HttpClient
  ) { }

  getMovieList(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

  deleteMovie(id):any {
    return null;
  }
}
