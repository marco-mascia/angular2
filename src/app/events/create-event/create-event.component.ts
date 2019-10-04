import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { IEvent } from "../shared/event.model";
import { EventService } from "../shared";

@Component({
  selector: "create-event",
  templateUrl: "./create-event.component.html",
  styleUrls: ["./create-event.component.css"]
})
export class CreateEventComponent {
  isDirty: boolean = true;
  newEvent: IEvent;

  constructor(
    @Inject(Router) private router: Router,
    @Inject(EventService) private eventService: EventService
  ) {}

  ngOnInit() {}

  cancel() {
    this.router.navigate(["/events"]);
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(["/events"]);
  }
}
