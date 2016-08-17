import {bootstrap} from "@angular/platform-browser-dynamic";
import {APP_ROUTER_PROVIDERS} from "./app/app.routes";
import {App} from "./app/app";
import {GameService} from "./app/GameService";

// enableProdMode()

bootstrap(App, [
  GameService,
  APP_ROUTER_PROVIDERS,
]).catch(err => console.error(err));
