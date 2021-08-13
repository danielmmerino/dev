import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {
  
  url: string = 'https://rickandmortyapi.com/api/character';
  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'text/plain, */*',
      'Content-Type': 'application/json' // We send JSON
    }),
    responseType: 'text' as 'json'  // We accept plain text as response.
  };

  constructor(
    private http: HttpClient
  ) { }
  GetCharacter(): Observable<any> {

    return this.http.get(this.url, this.httpOptions);
  }
}
