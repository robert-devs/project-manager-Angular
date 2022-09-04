import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IaddProject } from '../interfaces/userInterface';

@Injectable({
  providedIn: 'root',
})
export class UserProjectService {
  readonly BASE_URL = 'http://localhost:5000';
  httpOptions: { headers: any; observe: string };

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'Application-json' }),
      observe: 'body',
    };
  }
  addProject(data: IaddProject): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/projects/create`, data);
  }
  getProjects(): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/projects/all`);
  }
  deleteProject(id: string) {
    return this.http.delete(`${this.BASE_URL}/projects/${id}`);
  }
}
