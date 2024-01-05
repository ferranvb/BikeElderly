import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";

export const LAYOUT_ROUTE: Routes = [
    { path: '', redirectTo: 'dashboard',pathMatch:'full'},  
     { 'path': 'dashboard', 
       'title': 'Panell', 
       loadComponent: () => import('../../dashboard/component/dashboard.component').then(m=>m.DashboardComponent) 
     },
     { 'path' : 'volunteers', 
       'title' : 'Voluntaris', 
       loadChildren: () => import('../../volunteers/volunteers.routes').then(m=>m.VOLUNTEERS_ROUTE)
       // loadChildren: () => import('../../volunteers/volunteers-list/volunteers-list.component').then(m=>m.VolunteerListComponent)
     },
     { 'path' : 'appointments', 
       'title' : 'Cites', 
       loadChildren: () => import('../../appointments/appointment.routes').then(m=>m.APPOINTMENTS_ROUTE)
     },
     { 'path' : 'clients', 
       'title' : 'Clients', 
       loadChildren: () => import('../../clients/clients.routes').then(m=>m.CLIENTS_ROUTE)
     }
]

// export const LAYOUT_ROUTE: Routes = [ 
//   { 'path': 'vol', 
//     'title': 'Llista Voluntaris', 
//     loadComponent: () => import('../../volunteers/volunteers-list/volunteers-list.component').then(m=>m.VolunteerListComponent) 
//   },
//   {
//     'path': 'vol/new', 
//     'title': 'Alta Voluntaris', 
//     loadComponent: () => import('../../volunteers/volunteers-new/volunteers-new.component').then(m=>m.VolunteersNewComponent)
//   },
//   { 'path': 'vol/:id',
//     'title': 'Detall Voluntari', 
//     loadComponent: () => import('../../volunteers/volunteers-detail/volunteers-detail.component').then(m=>m.VolunteersDetailComponent)
//   },
//   {
//     path: '',
//     redirectTo: '',
//     pathMatch: 'full'
//   }

// ]

