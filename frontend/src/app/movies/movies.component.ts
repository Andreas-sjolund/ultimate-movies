import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as MoviesActions from './store/movies.actions';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  subscription: Subscription;
  constructor(
    public store: Store<fromApp.AppState>,
    private router: Router
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

  onEditMovie(index: number) {
    this.store.dispatch(new MoviesActions.StartEditMovie(index));
    this.router.navigate([`/movies/${this.movies[index].id}`]);
  }

  onDeleteMovie(index: number) {
    this.store.dispatch(new MoviesActions.DeleteMovie(index));
  }

}
