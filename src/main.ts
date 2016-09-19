import { XHRBackend, HTTP_PROVIDERS } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './app/in-memory-data.service';

import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { RouterProviders } from './app/app.routes';
import { enableProdMode } from '@angular/core';
// import {APP_BASE_HREF} from '@angular/common';
if (process.env.ENV === 'production') {
  enableProdMode();
}
bootstrap(AppComponent, [
  RouterProviders,
  HTTP_PROVIDERS,
  // { provide: APP_BASE_HREF, useValue: '/' },
  { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
  { provide: SEED_DATA, useClass: InMemoryDataService }      // in-mem server data
]);




