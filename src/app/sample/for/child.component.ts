import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './parent.component';

@Component({
    selector: 'child-component',
    templateUrl: './child.component.html'
})


export class ChildComponent {
    @Input() event: IEvent;
    @Output() eventClick = new EventEmitter();

    handleClick() {
        const sampleEvent: IEvent = {
            id: '1',
            name: 'my custom event'
        };

        console.log('event sent from child ', sampleEvent.id);
        this.eventClick.emit(sampleEvent.id);
    }
}
