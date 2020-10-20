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

    items = [
        {id: '1' , name: 'Alpha'},
        {id: '2' , name: 'Beta'},
        {id: '3' , name: 'Charlie'},
        {id: '4' , name: 'Delta'},
        {id: '5' , name: 'Echo'}
    ];
}
