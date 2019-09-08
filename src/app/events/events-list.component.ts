import { Component, OnInit, Inject } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';


@Component({
  templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit {

  events: any[];

  constructor(
    @Inject(EventService) private eventService: EventService,
    @Inject(ToastrService) private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
