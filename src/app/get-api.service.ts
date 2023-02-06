import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private http:HttpClient) { }

  getBreeds(pageNumber: number): Observable<any>{
    return this.http.get("https://catfact.ninja/breeds" + '?page=' + pageNumber)
  }

  getRandomFact(): Observable<any>{
    return this.http.get("https://catfact.ninja/fact")
  }
}
