import { Movie } from '../movie.model';
import * as MoviesActions from './movies.actions';

export interface State {
  movies: Movie[];
}

const initialState: State = {
  movies: [
    new Movie(
      'Terminator 2: Judgment Day',
      'James Cameron',
      'Action',
      'https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
    ),
    new Movie(
      'Terminator',
      'James Cameron',
      'Action',
      'https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
    ),
    new Movie(
      'Back to the Future',
      'Robert Zemeckis',
      'Adventure',
      'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
    ),
    new Movie(
      'Back to the Future Part II',
      'Robert Zemeckis',
      'Adventure',
      'https://m.media-amazon.com/images/M/MV5BZTMxMGM5MjItNDJhNy00MWI2LWJlZWMtOWFhMjI5ZTQwMWM3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
    ),
    new Movie(
      'Back to the Future Part III',
      'Robert Zemeckis',
      'Adventure',
      'https://m.media-amazon.com/images/M/MV5BYjhlMGYxNmMtOWFmMi00Y2M2LWE5NWYtZTdlMDRlMGEzMDA3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
    ),
  ]
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
