import { Injectable, Inject } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { EventService } from './shared/event.service';
import { map, flatMap, toArray, catchError, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ 
  providedIn: 'root',
}) 

export class EventsListResolver implements Resolve<any> {
  
  constructor(@Inject(EventService) private eventService:EventService) {}



  resolve(){       
    console.log('resolve service');    
    return this.eventService.getEvents().pipe(
      take(1), //TODO: Check why this is working and why isn't working without
      map(events => events),       
      catchError((err) => Observable.throw(err.json().error))
      );
  }

}
