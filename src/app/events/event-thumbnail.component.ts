import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [`
    .thumbnail { min-height: 250px; }
    .well div{ color: #bbb; }
    .green { color: green !important; }
    .bold { font-weight: bold; }
  `]
})

export class EventThumbnailComponent {
  @Input() event: any
  @Output() eventClick = new EventEmitter();

  someProperty: any = "Qualcosa";

  handleClickMe() {
    console.log('handleClickMe');
    this.eventClick.emit(this.event.name);
  }

  logFoo() {
    console.log('logFoo');
  }

  getStartTimeClass() {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    return { green: isEarlyStart, bold: isEarlyStart }
  }
}
