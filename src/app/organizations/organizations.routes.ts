import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { routes } from "../app.routes";


export const ORGANIZATIONS_ROUTE: Routes = [
  { 'path': '', 
    'title': 'Llista Organizacions', 
    loadComponent: () => import('./pages/organizations-list/organizations-list.component').then(m=>m.OrganizationsListComponent) 
  },
  {
    'path': 'new', 
    'title': 'Alta Organizació', 
    loadComponent: () => import('./pages/organizations-new/organizations-new.component').then(m=>m.OrganizationsNewComponent)
  },
//   { 'path': ':id',
//     'title': 'Detall Voluntari', 
//     loadComponent: () => import('./volunteers-detail/volunteers-detail.component').then(m=>m.VolunteersDetailComponent)
//   },
//   {
//     'path': 'new', 
//     'title': 'Alta Voluntaris', 
//     loadComponent: () => import('./volunteers-new/volunteers-new.component').then(m=>m.VolunteersNewComponent)
//   },
]
