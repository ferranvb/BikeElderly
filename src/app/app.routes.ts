import {ResolveFn, Routes} from '@angular/router';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { AuthGuardService as AuthGuard } from './auth/services/auth-guard.service';
import { ErrorComponent } from './shared/error/error.component';
import { DashboardComponent } from './dashboard/component/dashboard.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { VolunteerListComponent } from './volunteers/pages/volunteers-list/volunteers-list.component';
import { VolunteersNewComponent } from './volunteers/pages/volunteers-new/volunteers-new.component';


const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('llistat');

export const routes: Routes = [
  { 'path' : 'login', 'title' : 'Login Page', component: LoginPageComponent},
  { 'path' : 'error', 'title' : 'Error Page', component: ErrorComponent},
  { 'path' : 'app', 
    'title' : 'App', 
    component: LayoutComponent,
    loadChildren: () => import('./shared/layout/layout.routes').then(m=>m.LAYOUT_ROUTE)
  },
  { path:'' , redirectTo: 'login', pathMatch: 'full'
  } 
]