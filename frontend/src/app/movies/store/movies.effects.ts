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

  @Effect()
  deleteMovie = this.actions$.pipe(
    ofType(MoviesActions.DELETE_MOVIE),
    switchMap(() => {
      return this.http.delete(
        '' // Set this to Johan's delete path
        // 'http://loclahost:4200/api/movies'
      )
    })
  )

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>) {}
}
