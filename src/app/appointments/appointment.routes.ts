import { Routes } from "@angular/router";


export const APPOINTMENTS_ROUTE: Routes = [
  { 'path': '', 
    'title': 'Llista Cites', 
    loadComponent: () => import('./pages/appointments-list/appointments-list.component').then(m=>m.AppointmentListComponent) 
  },
  { 'path': 'p',
    'title': 'Panell Cites', 
    loadComponent: () => import('./pages/apopintments-list-panel/apopintments-list-panel.component').then(m=>m.ApopintmentsListPanelComponent)
  },
  {
    'path': 'new', 
    'title': 'Alta Cita', 
    loadComponent: () => import('./pages/appointments-new/appointments-new.component').then(m=>m.AppointmentsNewComponent)
  },
  {
    'path': 'edit', 
    'title': 'Edita Cita', 
    loadComponent: () => import('./pages/appointments-edit/appointments-edit.component').then(m=>m.AppointmentsEditComponent)
  },
]