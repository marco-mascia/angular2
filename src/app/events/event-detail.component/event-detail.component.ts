import { Component, Inject } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'event-detail',
    templateUrl: './event-detail.component.html',
    styles: [`
    .container{
        padding: 0 20px;
    }
    .event-image{
        max-height: 100px;
    }
  `]
})

export class EventDetailComponent {
    event: any;

    constructor(
        @Inject(EventService) private eventService: EventService,
        @Inject(ActivatedRoute) private route:ActivatedRoute
    ) { }

    ngOnInit() { 
        console.log('routeId: ', this.route.snapshot.params['id']);        
        this.event = this.eventService.getEventById(+this.route.snapshot.params['id']);
    }
}
