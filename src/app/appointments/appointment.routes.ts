import { Routes } from "@angular/router";


export const APPOINTMENTS_ROUTE: Routes = [
  { 'path': '', 
    'title': 'Llista Voluntaris', 
    loadComponent: () => import('./appointments-list/appointments-list.component').then(m=>m.AppointmentListComponent) 
  },
  // { 'path': ':id',
  //   'title': 'Detall Voluntari', 
  //   loadComponent: () => import('./appointments-detail/appointments-detail.component').then(m=>m.VolunteerDetailComponent)
  // },
  {
    'path': 'alta', 
    'title': 'Alta Voluntaris', 
    loadComponent: () => import('./appointments-new/appointments-new.component').then(m=>m.AppointmentsNewComponent)
  },
]