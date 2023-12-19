import {ResolveFn, Routes} from '@angular/router';
import { HomePageComponent } from './shared/homePage/homePage.component';
import { AboutPageComponent } from './shared/aboutPage/aboutPage.component';
import { AltaCitaComponent } from './cites/alta-cita/alta-cita.component';
import { LayoutpageComponent } from './shared/layout/layoutpage/layoutpage.component';
import { VoluntarisLlistaComponent } from './voluntaris/voluntaris-llista/voluntaris-llista.component';

const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('llistat');

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: LayoutpageComponent},
  { path: 'cites',
    title: 'Cites',
    component: AboutPageComponent,
    children: [
      {
        path: 'llistat',
        title: resolvedChildATitle,
        component: AltaCitaComponent,
      }
    ]

  },
  { path: 'voluntaris',
    title: 'Voluntaris',
    component: VoluntarisLlistaComponent,}
  

];

