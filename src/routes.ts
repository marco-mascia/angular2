import { Routes } from '@angular/router';

import { Error404Component } from './app/errors/404.component';

import {
  EventDetailComponent,
  EventsListComponent,
  EventsListResolver,
  EventRouteActivator,
  CreateEventComponent,
  CreateSessionComponent
} from './app/events/index';
import { ParentComponent } from './app/sample/communication/parent.component';


export const appRoutes: Routes = [
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventsListResolver }
  },
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent']
  }, // we used a function for canDeactivate, but we also use a service.
  {
    path: 'events/:eventId',
    component: EventDetailComponent,
    canActivate: [EventRouteActivator]
  }, // we used a service for canActivate
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  {
    path: 'sample/communication',
    component: ParentComponent
  }
];
