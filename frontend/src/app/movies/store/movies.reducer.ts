import { Movie } from '../movie.model';
import * as MoviesActions from './movies.actions';

export interface State {
  movies: Movie[];
  editedMovie: Movie;
  editMode: boolean;
}

const initialState: State = {
  movies: [],
  editedMovie: null,
  editMode: false
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
    case MoviesActions.START_EDIT_MOVIE:
      // Start edit movies
      return {
        ...state,
        editedMovie: state.movies[action.payload],
        editMode: true
      };
    case MoviesActions.UPDATE_MOVIE:
      // Update movies
      const newMovies = [...state.movies];
      newMovies[action.payload.index] = action.payload.newMovie;
      return {
        ...state,
        movies: newMovies,
        editedMovie: null,
        editMode: true
      };
    case MoviesActions.DELETE_MOVIE:
      // Delete movies
      return {
        ...state,
        movies: state.movies.filter((movie, index) => {
          return index !== action.payload;
        })
      };
    default:
      return state;
  }
}
