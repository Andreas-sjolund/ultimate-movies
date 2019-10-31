import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { map, switchMap } from 'rxjs/operators';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieId: string;
  movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(
        map(params => {
          return params['id'];
        }),
        switchMap(id => {
          this.movieId = id;
          return this.store.select('movies');
        }),
        map(moviesState => {
          return moviesState.movies.find((movie, index) => {
            return movie.id === this.movieId;
          });
        })
      )
      .subscribe(movie => {
        this.movie = movie;
      });
  }

}
