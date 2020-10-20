import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ChildComponent } from "./child.component";
import { ParentComponent } from "./parent.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [ParentComponent, ChildComponent],
  providers: [],
  exports: [ ],
})

export class ForModule {}
