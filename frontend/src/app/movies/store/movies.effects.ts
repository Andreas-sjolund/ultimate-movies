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
      const httpOptions = {
        headers: new HttpHeaders({ 
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin':'*'
        })
      };

      return this.http.get<Movie[]>(
        'http://localhost:4200/api/movies',
        httpOptions
      );
    }),
    map(movies => {
      return new MoviesActions.SetMovies(movies);
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>) {}
}
