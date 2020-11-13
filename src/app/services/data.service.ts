import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'http://localhost:5000';
  constructor(private http: HttpClient) { }

  Post = <T, V>(body: T, url: string): Observable<V> => this.http.post<V>(`${this.baseUrl}${url}`, body);
}
