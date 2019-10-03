
import { Routes } from '@angular/router';
import { EventDetailComponent } from './app/events/event-detail.component/event-detail.component';
import { EventsListComponent } from './app/events/events-list.component';
import { CreateEventComponent } from './app/events/create-event.component';
import { Error404Component } from './app/errors/404.component';
import { EventRouteActivator } from './app/events/event-route.activator.service';
import { EventsListResolver } from './app/events/events-list-resolve.service';



export const appRoutes:Routes = [   
    { path: 'events', component: EventsListComponent, resolve: {events: EventsListResolver} },        
    { path: 'events/new', component: CreateEventComponent, canDeactivate:['canDeactivateCreateEvent'] }, //we used a function for canDeactivate, but we also use a service.        
    { path: 'events/:eventId', component: EventDetailComponent, canActivate: [EventRouteActivator]  }, //we used a service for canActivate
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: './user/user.module#UserModule' }
];