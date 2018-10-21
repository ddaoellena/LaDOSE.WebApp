import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/environments/environment';
import {Game } from '../models/model'
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';


@Injectable()
export class GameService {
    constructor(private http: HttpClient) { }

    getAll(): Observable<Game[]> {
        return this.http.get<Game[]>(`${apiUrl}api/Game`);
    }

    getById(id: number) : Observable<Game> {
        return this.http.get<Game>(`${apiUrl}api/Game/` + id);
    }


}