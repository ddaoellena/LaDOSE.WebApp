import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/environments/environment';
import {Event } from '../models/model'


@Injectable()
export class EventService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Event[]>(`${apiUrl}api/event`);
    }

    getById(id: number) {
        return this.http.get(`${apiUrl}api/event/` + id);
    }


}