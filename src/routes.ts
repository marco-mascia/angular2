
import { Routes } from '@angular/router';
import { EventDetailComponent } from './app/events/event-detail.component/event-detail.component';
import { EventsListComponent } from './app/events/events-list.component';
import { CreateEventComponent } from './app/events/create-event.component';

export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent },
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailComponent },
    { path: '**', redirectTo: '/events', pathMatch: 'full' }
];