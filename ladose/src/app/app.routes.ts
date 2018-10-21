import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { SeasonsComponent } from './seasons/seasons.component';



export const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'seasons', component: SeasonsComponent,canActivate: [AuthGuard] },
    { path: 'events', component: EventsComponent,canActivate: [AuthGuard] },
    //{ path: 'event/:id', component: EventsComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
