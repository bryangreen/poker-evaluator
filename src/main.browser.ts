import {bootstrap} from "@angular/platform-browser-dynamic";
import {APP_ROUTER_PROVIDERS} from "./app/app.routes";
import {App} from "./app/app";
import {GameStore} from "./app/services/GameStore";

// enableProdMode()

bootstrap(App, [
  GameStore,
  APP_ROUTER_PROVIDERS,
]).catch(err => console.error(err));
