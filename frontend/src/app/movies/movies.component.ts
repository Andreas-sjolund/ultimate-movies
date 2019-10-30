import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as MoviesActions from './store/movies.actions';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  subscription: Subscription;
  constructor(
    public store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.subscription = this.store
      .select('movies')
      .pipe(map(moviesState => moviesState.movies))
      .subscribe(movies => {
        this.movies = movies;
      });

    this.store.dispatch(new MoviesActions.FetchMovies());
  }

}
