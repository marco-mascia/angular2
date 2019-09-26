import { Component, OnInit, Inject } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ToastrService } from "../common/toastr.service";
import { ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";

@Component({
  templateUrl: "./events-list.component.html"
})
export class EventsListComponent implements OnInit {
  events;

  constructor(
    @Inject(EventService) private eventService: EventService,
    @Inject(ToastrService) private toastr: ToastrService,
    @Inject(ActivatedRoute) private route: ActivatedRouteSnapshot
  ) {}

  ngOnInit() {
    console.log('this.route ', this.route);
    console.log('this.route.snapshot.data ', this.route.data['events']);
    
    this.events = this.route.data['events'];
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
