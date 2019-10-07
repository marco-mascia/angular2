import { Component, Inject } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "../shared";

@Component({
  selector: "event-detail",
  templateUrl: "./event-detail.component.html",
  styles: [
    `
      .container {
        padding: 0 20px;
      }
      .event-image {
        max-height: 100px;
      }
    `
  ]
})
export class EventDetailComponent {
  event: IEvent;

  constructor(
    @Inject(EventService) private eventService: EventService,
    @Inject(ActivatedRoute) private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log("routeId: ", this.route.snapshot.params["eventId"]);
    debugger;

    this.event = this.eventService.getEventById(
      +this.route.snapshot.params["eventId"]
    );
  }
}
