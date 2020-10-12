import { Component, Input } from '@angular/core';

export interface IEvent {
    id: string;
    name: string;
}

@Component({
    templateUrl: './parent.component.html'
})

export class ParentComponent {
    @Input() event: IEvent;

    handleEventClicked(event){
        console.log('event received by parent ', event);
    }
}
