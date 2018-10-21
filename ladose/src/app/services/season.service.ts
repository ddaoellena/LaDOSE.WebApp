import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/environments/environment';
import {Event, Season } from '../models/model'
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';


@Injectable()
export class SeasonService {
    constructor(private http: HttpClient) { }

    getAll(): Observable<Season[]> {
        return this.http.get<Season[]>(`${apiUrl}api/Season`);
    }

    getById(id: number) : Observable<Season> {
        return this.http.get<Season>(`${apiUrl}api/season/` + id);
    }


}