import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ilogin, IUser } from '../interfaces/userInterface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly BASE_URL = 'http://localhost:5000';
  httpOptions: { headers: HttpHeaders; observe: string };

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'body',
    };
  }
  registerUser(data: IUser) {
    return this.http.post<any>(this.BASE_URL + '/users/login/', data);
  }
  loginUser(data: Ilogin): Observable<any> {
    return this.http.post<any>(this.BASE_URL + '/users/login/', data);
  }
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.BASE_URL + '/users');
  }
  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
  logoutUser() {
    localStorage.clear();
  }
}
