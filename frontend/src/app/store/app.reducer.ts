import { ActionReducerMap } from '@ngrx/store';

import * as fromMovies from '../movies/store/movies.reducer';

export interface AppState {
  movies: fromMovies.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  movies: fromMovies.moviesReducer,
};
