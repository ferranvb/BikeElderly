import {Routes} from '@angular/router';
import { HomePageComponent } from './shared/homePage/homePage.component';
import { AboutPageComponent } from './shared/aboutPage/aboutPage.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  // {path: 'books/:id', component: BookDetailPageComponent},

];