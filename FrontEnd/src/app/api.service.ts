import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // The URL of the API
  public apiURL: string = 'http://localhost:4201';

  // Inject the HttpClient module to the constructor params
  constructor(private httpClient: HttpClient) { }

  // Get the list of heroes from the API
  public getHeroes(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiURL}/api/Heroes`);
  }

  public evolveHero(name: string): Observable<any> {

    //Ensure that Content being posted is of type JSON
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    // Send a POST request to the API with the hero's name and the action as "evolve"
    return this.httpClient.post<any>(`${this.apiURL}/api/Heroes`, { action: "evolve", name }, httpOptions);
  }
}
