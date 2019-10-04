import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from './shared';

@Component({
    selector: 'create-event',
    templateUrl: './create-event.component.html',
})

export class CreateEventComponent {
    event:IEvent;
    isDirty:boolean = false;

    constructor(@Inject(Router) private router:Router){}

    ngOnInit() {}

    cancel(){
        this.router.navigate(['/events']);       
    }
}
