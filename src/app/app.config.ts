import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter, withComponentInputBinding, withViewTransitions} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimations} from "@angular/platform-browser/animations";
import { HttpClientModule, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { LOCALE_ID } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(), 
    provideRouter(routes, withViewTransitions(), withComponentInputBinding()),
    provideHttpClient(
      withFetch(),
    ),
    // provideHttpClient(withInterceptorsFromDi()),
    // [{provide: LOCALE_ID, useValue: 'es-ES' }],
    MessageService]
};

