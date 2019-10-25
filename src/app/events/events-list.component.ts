import { Component, OnInit, Inject } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";
import { IEvent } from './shared';

@Component({
  templateUrl: "./events-list.component.html"
})
export class EventsListComponent implements OnInit {
  events:IEvent[];

  constructor(
    @Inject(EventService) private eventService: EventService,
    @Inject(ActivatedRoute) private route: ActivatedRoute
  ) {}

  ngOnInit() {
    //console.log('EventsListComponent');
    //console.log('this.route ', this.route);
    //console.log('this.route.snapshot.data ', this.route.data['events']);   
    this.events = this.route.snapshot.data['events'];

  }

}
