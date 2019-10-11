import { Component, Inject, Input } from "@angular/core";

@Component({
  selector: 'collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styleUrls: ['./collapsible-well.component.css']
})
export class CollapsibleWellComponent {
  @Input() title: string;
  visible: boolean = true;

  constructor() {}

  toggleContent() {
      debugger;
    this.visible = !this.visible;
  }

}
