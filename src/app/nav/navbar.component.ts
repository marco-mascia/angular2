import { Component, Inject } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [ `
    .nav.navbar-nav { font-size: 15px; }
    #searchForm { margin-right: 100px; }
    li > a.active { color: #F97924; }
  `]
})

export class NavbarComponent {
  searchTerm: string = "";
  foundSessions: ISession[];

  constructor(
    @Inject(AuthService) private authService: AuthService,
    @Inject(EventService) private eventService: EventService){

    }

  searchSessions(searchTerm){
    this.eventService.searchSessions(searchTerm).subscribe(
      sessions => {
        this.foundSessions = sessions;
        console.log('this.foundSessions ', this.foundSessions);
      }
    );
  }
}
