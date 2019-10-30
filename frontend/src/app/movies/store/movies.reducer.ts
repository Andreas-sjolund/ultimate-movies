import { Movie } from '../movie.model';
import * as MoviesActions from './movies.actions';

export interface State {
  movies: Movie[];
}

const initialState: State = {
  movies: []
};

export function moviesReducer(
  state = initialState,
  action: MoviesActions.MoviesActions
) {
  switch (action.type) {
    case MoviesActions.SET_MOVIES:
      // Set movies
      return {
        ...state,
        movies: [...action.payload]
      };
    case MoviesActions.FETCH_MOVIES:
      // Fetch movies
      return {
        ...state,
      };
    case MoviesActions.ADD_MOVIE:
      // Add movies
      return {
        ...state,
        movies: [...state.movies, action.payload]
      };
    case MoviesActions.UPDATE_MOVIE:
      // Update movies
      return {
        ...state
      };
    case MoviesActions.DELETE_MOVIE:
      // Delete movies
      return {
        ...state,
      };
    default:
      return state;
  }
}
