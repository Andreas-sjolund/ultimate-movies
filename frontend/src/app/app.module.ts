import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { StartPageComponent } from './start-page/start-page.component';

const appRoutes: Routes = [
  { path: '', component: StartPageComponent},
  { path: 'movies', component: MoviesComponent},
  { path: '**', component: StartPageComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
