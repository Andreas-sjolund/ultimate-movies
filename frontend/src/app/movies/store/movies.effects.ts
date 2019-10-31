import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import * as fromApp from '../../store/app.reducer';
import * as MoviesActions from './movies.actions';
import { Movie } from '../movie.model';

@Injectable()
export class MoviesEffects {
  @Effect()
  fetchMovies = this.actions$.pipe(
    ofType(MoviesActions.FETCH_MOVIES),
    switchMap(() => {
      return this.http.get<Movie[]>(
        'http://localhost:4200/api/movies'
      );
    }),
    map(movies => {
      return new MoviesActions.SetMovies(movies);
    })
  );

  @Effect({dispatch: false})
  deleteMovie = this.actions$.pipe(
    ofType(MoviesActions.DELETE_MOVIE),
    withLatestFrom(this.store.select('movies')),
    switchMap(([actionData, moviesState]) => {
      const movieId = actionData.payload.movieId;
      return this.http.delete(
        `http://localhost:4200/api/movies/${movieId}`
      );
    })
  );

  @Effect({dispatch: false})
  addMovie = this.actions$.pipe(
    ofType(MoviesActions.ADD_MOVIE),
    withLatestFrom(this.store.select('movies')),
    switchMap(([actionData, moviesState]) => {
      return this.http.post(
        'http://localhost:4200/api/movies',
        {
          title: actionData.payload.title,
          director: actionData.payload.director,
          genre: actionData.payload.genre,
          image_url: actionData.payload.image_url,
          description: actionData.payload.description
        }
      );
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>) {}
}
