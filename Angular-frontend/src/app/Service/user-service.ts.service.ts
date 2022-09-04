import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/userInterface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly BASE_URL = 'http://localhost:5000';

  constructor(private http: HttpClient) {}
  fetchUser(): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/users`);
  }
}
