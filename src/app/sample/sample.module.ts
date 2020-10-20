import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ChildComponent } from "./communication/child.component";
import { ParentComponent } from "./communication/parent.component";
import { ForModule } from './for/for.module';


@NgModule({
  imports: [BrowserModule, ForModule],
  declarations: [ParentComponent, ChildComponent],
  providers: [],
})
export class SampleModule {}
