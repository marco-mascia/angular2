import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { ActivatedRouteSnapshot } from "@angular/router";
import { RouterStateSnapshot } from "@angular/router";
import { EventService } from "src/app/events/shared/event.service";
import { Inject } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})

/**
 *
 * Redirects on 404 if the event id doesn't exist
 * es:  http://localhost:4200/events/1 -> event exists, no problem.
 *      http://localhost:4200/events/999 -> ERROR, go to to 404
 */
export class EventRouteActivator implements CanActivate {
  constructor(
    @Inject(EventService) private eventService: EventService,
    @Inject(Router) private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //Check if event exist searching by id

    const eventExists = !!this.eventService.getEventById(
      +route.params["eventId"]
    );    

    if (!eventExists) {
      this.router.navigate(["/404"]);
      return false;
    }
    return true;
  }
}
