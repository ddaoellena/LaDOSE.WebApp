import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/environments/environment';
import {Event } from '../models/model'
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';


@Injectable()
export class EventService {
    constructor(private http: HttpClient) { }

    getAll(): Observable<Event[]> {
        return this.http.get<Event[]>(`${apiUrl}api/event`);
    }

    getById(id: number) : Observable<Event> {
        return this.http.get<Event>(`${apiUrl}api/event/` + id);
    }

    // postEvent(e: Event){
    //     if(e.id === 0 )
    //     {
    //         return this.http.put(`${apiUrl}api/event/`,e);
    //     }
    //         // return this.http.post(`${apiUrl}api/event/`,e)._subscribe(e=>);
    // }

}