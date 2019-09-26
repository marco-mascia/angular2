import { Injectable, Inject } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { EventService } from './shared/event.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ 
  providedIn: 'root',
}) 
export class EventsListResolver implements Resolve<any> {
  
  constructor(@Inject(EventService) private eventService:EventService) {}

  resolve(  
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<any> | Observable<never> {       
    //const test = this.eventService.getEvents().pipe(map(val => console.log(val)));    
    //this.eventService.getEvents().pipe(map(val => {console.log(val)}))        
    this.eventService.getEvents().pipe(map(val => {console.log(val)}));
    return this.eventService.getEvents().pipe(map(events => events));
  }
}
