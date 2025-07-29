import {
  ApplicationConfig,
  LOCALE_ID,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection
} from '@angular/core';
import { provideRouter } from '@angular/router';
import localeES from '@angular/common/locales/es'
import localeFR from '@angular/common/locales/fr'

registerLocaleData(localeES,'es');
registerLocaleData(localeFR,'fr');

import { routes } from './app.routes';
import {registerLocaleData} from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide: LOCALE_ID,
      useValue: 'fr'
    }
  ]
};
