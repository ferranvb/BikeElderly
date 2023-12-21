import {ResolveFn, Routes} from '@angular/router';
import { AltaCitaComponent } from './cites/alta-cita/alta-cita.component';
import { VoluntarisLlistaComponent } from './voluntaris/voluntaris-llista/voluntaris-llista.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { LlistaCitesComponent } from './cites/llista-cites/llista-cites.component';
import { PanellResumComponent } from './panell-resum/panell-resum.component';
import { VoluntarisAltaComponent } from './voluntaris/voluntaris-alta/voluntaris-alta.component';

const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('llistat');

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: PanellResumComponent },
  {path: 'cites', title: 'Llista Cites',component: LlistaCitesComponent},
  {path: 'alta', title: 'Alta Cita',component: AltaCitaComponent,},
  { path: 'voluntaris',title: 'Llista Voluntaris', component: VoluntarisLlistaComponent,},
  { path: 'voluntari-alta',title: 'Alta Voluntari', component: VoluntarisAltaComponent,},
];

