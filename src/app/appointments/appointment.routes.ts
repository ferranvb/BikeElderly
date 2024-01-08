import { Routes } from "@angular/router";


export const APPOINTMENTS_ROUTE: Routes = [
  { 'path': '', 
    'title': 'Llista Cites', 
    loadComponent: () => import('./pages/appointments-list/appointments-list.component').then(m=>m.AppointmentListComponent) 
  },
  { 'path': 'p',
    'title': 'Detall Voluntari', 
    loadComponent: () => import('./pages/apopintments-list-panel/apopintments-list-panel.component').then(m=>m.ApopintmentsListPanelComponent)
  },
  {
    'path': 'alta', 
    'title': 'Alta Voluntaris', 
    loadComponent: () => import('./pages/appointments-new/appointments-new.component').then(m=>m.AppointmentsNewComponent)
  },
]