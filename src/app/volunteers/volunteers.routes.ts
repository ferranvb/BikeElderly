import { Routes } from "@angular/router";
import { VolunteersNewComponent } from './volunteers-new/volunteers-new.component';


export const VOLUNTEERS_ROUTE: Routes = [
  { 'path': '', 
    'title': 'Llista Voluntaris', 
    loadComponent: () => import('./volunteers-list/volunteers-list.component').then(m=>m.VolunteerListComponent) 
  },
  {
    'path': 'new', 
    'title': 'Alta Voluntaris', 
    loadComponent: () => import('./volunteers-new/volunteers-new.component').then(m=>m.VolunteersNewComponent)
  },
  { 'path': ':id',
    'title': 'Detall Voluntari', 
    loadComponent: () => import('./volunteers-detail/volunteers-detail.component').then(m=>m.VolunteersDetailComponent)
  },
  {
    'path': 'new', 
    'title': 'Alta Voluntaris', 
    loadComponent: () => import('./volunteers-new/volunteers-new.component').then(m=>m.VolunteersNewComponent)
  },
]