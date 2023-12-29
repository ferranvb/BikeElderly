import {ResolveFn, Routes} from '@angular/router';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';



const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('llistat');

export const routes: Routes = [
  { 'path' : 'login', 'title' : 'Login Page', component: LoginPageComponent},
  { 'path' : 'panell', 'title' : 'Panell', loadComponent: () => import('./panell-resum/panell-resum.component').then(m=>m.PanellResumComponent) },
  { 'path' : 'panell', children: [
    { 'path': 'appointments-list', 'title': 'Llista Cites', loadComponent: () => import('./cites/llista-cites/llista-cites.component').then(m=>m.LlistaCitesComponent) },
    { 'path': 'appointment-registration', 'title': 'Alta Cita', loadComponent: () => import('./cites/alta-cita/alta-cita.component').then(m=>m.AltaCitaComponent) },
    { 'path': 'volunteers-list', 'title': 'Llista Voluntaris', loadComponent: () => import('./voluntaris/voluntaris-llista/voluntaris-llista.component').then(m=>m.VoluntarisLlistaComponent) },
    { 'path': 'volunteer-registration', 'title': 'Alta Voluntaris', loadComponent: () => import('./voluntaris/voluntaris-alta/voluntaris-alta.component').then(m=>m.VoluntarisAltaComponent) },
    { 'path': 'users-list','title': 'Llista Usuaris', loadComponent: () => import('./users/user-list/user-list.component').then(m=>m.UserListComponent)},
    { 'path': 'user-registration','title': 'Alta Usuari',loadComponent: () => import('./users/user-registration/user-registration.component').then(m=>m.UserRegistrationComponent)}
  ] 
  }, 
  { 'path': '', 'pathMatch': 'full', 'redirectTo': 'login'}
];



// export const routes: Routes = [
//   { 
//     path: 'login', 
//     loadChildren: () => import('./auth/pages/login-page/login-page.component').then(m=>m.LoginPageComponent)
//   },
//   { 
//     path: 'home', 
//     loadChildren: () => import('./panell-resum/panell-resum.component').then(m=>m.PanellResumComponent),
//   },
//   { 
//     path: 'appointments-list',
//     title: 'Llista Cites',  
//     loadComponent: async() => (await import('./cites/llista-cites/llista-cites.component')).LlistaCitesComponent
//       },
//       { 
//         path: 'appointment-registration', 
//         title: 'Alta Cita',
//         loadComponent: async() => ((await import('./cites/alta-cita/alta-cita.component')).AltaCitaComponent)
//       },
//       { 
//         path: 'volunteers-list',
//         title: 'Llista Voluntaris', 
//         loadComponent: async() => ((await import('./voluntaris/voluntaris-llista/voluntaris-llista.component')).VoluntarisLlistaComponent) 
//       },
//       {
//         path: 'volunteer-registration',
//         title: 'Alta Voluntaris',
//         loadComponent: async() => ((await import('./voluntaris/voluntaris-alta/voluntaris-alta.component')).VoluntarisAltaComponent) 
//       },
//       { 
//         path: 'users-list',
//         title: 'Llista Usuaris', 
//         loadComponent: async() => ((await import('./users/user-list/user-list.component')).UserListComponent)  
//       },
//       {
//         path: 'user-registration',
//         title: 'Alta Usuari',
//         loadComponent: async() => ((await import('./users/user-registration/user-registration.component')).UserRegistrationComponent)  
//       },
//     {
//     path: '', 
//     pathMatch: 'full', 
//     redirectTo: 'login',
//   }

// ];




// {path: 'alta', title: 'Alta Cita',component: AltaCitaComponent,},
// { path: 'voluntaris',title: 'Llista Voluntaris', component: VoluntarisLlistaComponent,},
// { path: 'voluntari-alta',title: 'Alta Voluntari', component: VoluntarisAltaComponent,},
// {path: '', pathMatch: 'full', redirectTo: 'home'},