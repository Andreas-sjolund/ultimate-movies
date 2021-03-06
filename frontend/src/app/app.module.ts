import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { StartPageComponent } from './start-page/start-page.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MoviesEffects } from './movies/store/movies.effects';
import * as fromApp from './store/app.reducer';
import { MovieFormComponent } from './movies/movie-form/movie-form.component';

const appRoutes: Routes = [
  { path: '', component: StartPageComponent},
  { path: 'movies', component: MoviesComponent},
  { path: 'movies/:id', component: MovieDetailsComponent},
  { path: '**', component: StartPageComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    StartPageComponent,
    MovieDetailsComponent,
    MovieFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    StoreModule.forRoot(fromApp.appReducer),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    EffectsModule.forRoot([MoviesEffects]),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
