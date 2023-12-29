import {ResolveFn, Routes} from '@angular/router';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { AuthGuardService as AuthGuard } from './auth/services/auth-guard.service';
import { ErrorComponent } from './shared/error/error.component';


const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('llistat');

export const routes: Routes = [
  { 'path' : 'login', 'title' : 'Login Page', component: LoginPageComponent},
  { 'path' : 'error', 'title' : 'Error Page', component: ErrorComponent},
  { 'path' : 'panell', 'title' : 'Panell', loadComponent: () => import('./shared/layout/layout.component').then(m=>m.LayoutComponent), canActivate: [AuthGuard] },
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



