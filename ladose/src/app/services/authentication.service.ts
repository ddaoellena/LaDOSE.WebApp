import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { apiUrl } from '../../environments/environment';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }
  //  isConnected : BehaviorSubject<Boolean> = new BehaviorSubject(false);
    login(username: string, password: string) {
        return this.http.post<any>(`${apiUrl}users/auth`, { username: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            //    this.isConnected.next(true);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        //this.isConnected.next(false);
    }

    isLogged(){
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
       return currentUser!=null && currentUser.token!=null;
    }
}