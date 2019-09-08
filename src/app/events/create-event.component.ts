import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'create-event',
    templateUrl: './create-event.component.html',
})

export class CreateEventComponent {
    event: any;

    constructor(
        @Inject(Router) private router:Router
    ) { }

    ngOnInit() {
    }

    cancel(){
        this.router.navigate(['/events']);
    }
}
