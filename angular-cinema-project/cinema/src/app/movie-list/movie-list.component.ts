import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];
  movies$: Observable<Movie[]> = this.httpService.getMovieList();

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  getMovies(): void {
    this.httpService.getMovieList();
  }

  deleteMovie(id: number): any {
    return this.httpService.deleteMovie(id).subscribe(
      () => this.movies$ = this.httpService.getMovieList()
    )
  }

}