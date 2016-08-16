import {provideRouter, RouterConfig} from "@angular/router";
import {Home} from "./home/home";
import {Manual} from "./manual/manual";

const routes: RouterConfig = [
  {path: '', redirectTo: 'home', terminal: true},
  {path: 'home', component: Home},
  {path: 'manual', component: Manual}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
