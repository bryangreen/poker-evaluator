import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {HTTP_PROVIDERS} from "@angular/http";
import {APP_ROUTER_PROVIDERS} from "./app/app.routes";
import {App} from "./app/app";
import {GameService} from "./app/GameService";
// import {enableProdMode} from '@angular/core';

// enableProdMode()

bootstrap(App, [
  GameService,
  HTTP_PROVIDERS,
  APP_ROUTER_PROVIDERS,
  {provide: LocationStrategy, useClass: HashLocationStrategy}
])
  .catch(err => console.error(err));
