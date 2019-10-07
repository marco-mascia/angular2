import { Component, Inject } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent, ISession } from "../shared";

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
      a {
        cursor: pointer;
      }
    `
  ]
})
export class EventDetailComponent {
  event: IEvent;
  addMode: boolean;

  constructor(
    @Inject(EventService) private eventService: EventService,
    @Inject(ActivatedRoute) private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log("routeId: ", this.route.snapshot.params["eventId"]);
    this.event = this.eventService.getEventById(
      +this.route.snapshot.params["eventId"]
    );
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }
}
