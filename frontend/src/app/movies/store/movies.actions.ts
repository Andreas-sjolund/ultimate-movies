import { Action } from '@ngrx/store';

import { Movie } from '../movie.model';

export const FETCH_MOVIES = '[Movies] Fetch Movies';
export const SET_MOVIES = '[Movies] Set Movies';
export const ADD_MOVIE = '[Movie] Add Movie';
export const START_EDIT_MOVIE = '[Movie] Start Edit Movie';
export const UPDATE_MOVIE = '[Movie] Update Movie';
export const DELETE_MOVIE = '[Movie] Delete Movie';

export class SetMovies implements Action {
  readonly type = SET_MOVIES;

  constructor(public payload: Movie[]) {}
}

export class FetchMovies implements Action {
  readonly type = FETCH_MOVIES;
}

export class AddMovie implements Action {
  readonly type = ADD_MOVIE;

  constructor(public payload: Movie) {}
}

export class StartEditMovie implements Action {
  readonly type = START_EDIT_MOVIE;

  constructor(public payload: number) {}
}
export class UpdateMovie implements Action {
  readonly type = UPDATE_MOVIE;

  constructor(public payload: {index: number, newMovie: Movie}) {}
}

export class DeleteMovie implements Action {
  readonly type = DELETE_MOVIE;

  constructor(public payload: {index: number, movieId: string}) {}
}

export type MoviesActions =
  | SetMovies
  | FetchMovies
  | AddMovie
  | StartEditMovie
  | UpdateMovie
  | DeleteMovie;
