import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NavbarComponent } from "./nav/navbar.component";
import { ToastrService } from "./common/toastr.service";
import { RouterModule } from "@angular/router";
import { appRoutes } from "src/routes";

import { Error404Component } from "./errors/404.component";
import {
  EventDetailComponent,
  EventService,
  EventThumbnailComponent,
  EventsListComponent,
  EventsListResolver,
  EventRouteActivator,
  CreateEventComponent
} from "./events/index";
import { EventsAppComponent } from "./events-app.component";
import { AuthService } from "./user/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
    //RouterModule.forRoot(appRoutes, { enableTracing: true }) //debug
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventsListResolver,
    { provide: "canDeactivateCreateEvent", useValue: checkDirtyState },
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}

/**
 * This function is declared here only to show that's possible to do, and to show the providers syntax for something that is not a service.
 *
 */
export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      "You have not saved this event, do you really need to cancel?"
    );
  }
  return true;
}
