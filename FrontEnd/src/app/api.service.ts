import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public apiURL: string = 'http://localhost:4201';

  constructor(private httpClient: HttpClient) { }

  public getHeroes(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiURL}/api/heroes`);
  }
}
