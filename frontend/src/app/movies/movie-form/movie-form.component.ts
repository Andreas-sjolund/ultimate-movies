import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as MoviesActions from '../store/movies.actions';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {
  @ViewChild('f', { static: false }) slForm: NgForm;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newMovie = new Movie(null, value.title, value.director, value.genre, value.image_url, value.description);
    this.store.dispatch(new MoviesActions.AddMovie(newMovie));
  }

  onClear() {
    this.slForm.reset();
  }

}
