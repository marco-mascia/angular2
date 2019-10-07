import { Component, Inject, Input } from "@angular/core";
import { EventService } from "../../shared/event.service";
import { ActivatedRoute } from "@angular/router";
import { ISession } from "../../shared";

@Component({
  selector: "session-list",
  templateUrl: "./session-list.component.html",
  styleUrls: []
})
export class SessionListComponent {
  @Input() sessions: ISession[];

  constructor(
    @Inject(EventService) private eventService: EventService,
    @Inject(ActivatedRoute) private route: ActivatedRoute
  ) {}

  ngOnInit() {}
}
