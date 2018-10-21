import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );


  logged: Boolean;
  constructor(private breakpointObserver: BreakpointObserver, private authenticationService: AuthenticationService, private router: Router) {

    router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: NavigationStart) => {
      console.log(event.url);
      this.logged = this.authenticationService.isLogged();
    });
  }
  ngOnInit() {

  }
}
