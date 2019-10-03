
import { Routes } from '@angular/router';
import { CreateEventComponent } from './app/events/create-event.component';
import { Error404Component } from './app/errors/404.component';

import {EventDetailComponent, 
    EventsListComponent,  
    EventsListResolver, 
    EventRouteActivator } from './app/events/index'

export const appRoutes:Routes = [   
    { path: 'events', component: EventsListComponent, resolve: {events: EventsListResolver} },        
    { path: 'events/new', component: CreateEventComponent, canDeactivate:['canDeactivateCreateEvent'] }, //we used a function for canDeactivate, but we also use a service.        
    { path: 'events/:eventId', component: EventDetailComponent, canActivate: [EventRouteActivator]  }, //we used a service for canActivate
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: './user/user.module#UserModule' }
];