// Vendors

import 'reflect-metadata';

// NOTE: reference path is temporary workaround (see https://github.com/angular/zone.js/issues/297)
///<reference path="../node_modules/zone.js/dist/zone.js.d.ts"/>
require('zone.js');
import "zone.js/dist/long-stack-trace-zone.js";

// Angular 2
import '@angular/platform-browser-dynamic';
import '@angular/platform-browser';
import '@angular/core';
import '@angular/http';
import '@angular/router';

// RxJS 5
// import 'rxjs/Rx';

// For vendors for example jQuery, Lodash, angular2-jwt import them here
// Also see src/typings.d.ts as you also need to run `typings install x` where `x` is your module
