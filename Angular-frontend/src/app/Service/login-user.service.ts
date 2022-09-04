import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ilogin } from '../interfaces/userInterface';

@Injectable({
  providedIn: 'root',
})
export class LoginUserService {
  readonly BASE_URL = 'http://localhost:5000';
  httpOptions: { headers: HttpHeaders; observe: string };

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'body',
    };
  }
  loginUser(data: Ilogin): Observable<any> {
    return this.http.post<any>(this.BASE_URL + 'Ilogin/', data);
  }
}
