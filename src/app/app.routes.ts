import {ResolveFn, Routes} from '@angular/router';


const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('llistat');

export const routes: Routes = [
  { 
    path: 'login', 
    loadComponent: async () => (await import('./auth/pages/login-page/login-page.component')).LoginPageComponent,
  },
  { 
    path: 'home', 
    loadComponent: async () => (await import('./panell-resum/panell-resum.component')).PanellResumComponent,
  },
  { 
    path: 'appointments-list',
    title: 'Llista Cites',  
    loadComponent: async() => (await import('./cites/llista-cites/llista-cites.component')).LlistaCitesComponent
  },
  { 
    path: 'appointment-registration', 
    title: 'Alta Cita',
    loadComponent: async() => ((await import('./cites/alta-cita/alta-cita.component')).AltaCitaComponent)
  },
  { 
    path: 'volunteers-list',
    title: 'Llista Voluntaris', 
    loadComponent: async() => ((await import('./voluntaris/voluntaris-llista/voluntaris-llista.component')).VoluntarisLlistaComponent) 
  },
  {
    path: 'volunteer-registration',
    title: 'Alta Voluntaris',
    loadComponent: async() => ((await import('./voluntaris/voluntaris-alta/voluntaris-alta.component')).VoluntarisAltaComponent) 
  },
  { 
    path: 'users-list',
    title: 'Llista Usuaris', 
    loadComponent: async() => ((await import('./users/user-list/user-list.component')).UserListComponent)  
  },
  {
    path: 'user-registration',
    title: 'Alta Usuari',
    loadComponent: async() => ((await import('./users/user-registration/user-registration.component')).UserRegistrationComponent)  
  },
  {
    path: '', 
    pathMatch: 'full', 
    redirectTo: 'login',
  }

];




// {path: 'alta', title: 'Alta Cita',component: AltaCitaComponent,},
// { path: 'voluntaris',title: 'Llista Voluntaris', component: VoluntarisLlistaComponent,},
// { path: 'voluntari-alta',title: 'Alta Voluntari', component: VoluntarisAltaComponent,},
// {path: '', pathMatch: 'full', redirectTo: 'home'},