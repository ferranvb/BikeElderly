import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { routes } from "../app.routes";


export const VOLUNTEERS_ROUTE: Routes = [
  { 'path': '', 
    'title': 'Llista Voluntaris', 
    loadComponent: () => import('./pages/volunteers-list/volunteers-list.component').then(m=>m.VolunteerListComponent) 
  },
  {
    'path': 'new', 
    'title': 'Alta Voluntaris', 
    loadComponent: () => import('./pages/volunteers-new/volunteers-new.component').then(m=>m.VolunteersNewComponent)
  },
  { 'path': ':id',
    'title': 'Detall Voluntari', 
    loadComponent: () => import('./pages/volunteers-detail/volunteers-detail.component').then(m=>m.VolunteersDetailComponent)
  },
  {
    'path': 'new', 
    'title': 'Alta Voluntaris', 
    loadComponent: () => import('./pages/volunteers-new/volunteers-new.component').then(m=>m.VolunteersNewComponent)
  },
]

