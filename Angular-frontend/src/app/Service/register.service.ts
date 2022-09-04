import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IregisterUsers } from '../interfaces/userInterface';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  readonly BASE_URL = 'http://localhost:5000/users/register';
  userUrl = 'http://localhost:5000/users/users';

  constructor(private http: HttpClient) {}
  RegisterUser(userCred: any): Observable<IregisterUsers> {
    return this.http.post<IregisterUsers>(
      `${this.BASE_URL}/users/register`,
      userCred
    );
  }

  // getUsers(): Observable<Iprojects> {
  //   return this.http.get<Iprojects[]>(this.BASE_URL)
  // }
}
