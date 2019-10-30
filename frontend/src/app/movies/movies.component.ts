import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.model';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor() { }

  ngOnInit() {
    const newMovie = new Movie(
      'Terminator 2: Judgment Day',
      'James Cameron',
      'Action',
      'https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
    );
    this.movies.push(newMovie);
    console.log(this.movies);
  }

}
