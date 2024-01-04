import { Routes } from "@angular/router";


export const CLIENTS_ROUTE: Routes = [
  { 'path': '', 
    'title': 'Llista Clients', 
    loadComponent: () => import('./clients-list/clients-list.component').then(m=>m.ClientsListComponent) 
  },
  // { 'path': ':id',
  //   'title': 'Detall Clients', 
  //   loadComponent: () => import('./').then(m=>m.VolunteerDetailComponent)
  // },
  {
    'path': 'alta', 
    'title': 'Alta Clients', 
    loadComponent: () => import('./clients-new/clients-new.component').then(m=>m.ClientsNewComponent)
  },
]