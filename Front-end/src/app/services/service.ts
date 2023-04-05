import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class Service {
  despliegue: boolean = false;
  showAdded: boolean = false;
  incorrectPass: boolean = false;
  notExists: boolean = false;
  logged: boolean = false;
  showLogout: boolean = false;
  notes: any[] = [];
  trash: any[] = [];
  favourites: any[] = [];

  name: string = '';
  surname: string = '';
  email: string = '';
  password: string = '';
  constructor(public http: HttpClient) {}

  token: string = '';
  private baseUrl = 'http://localhost:4000';

  register(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, { email, password });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, password });
  }
  /*
  register(params:any){
    return this.http.post(`${this.serverUrl}/register`,params)
  }

  login(params:any){
    return this.http.post(`${this.serverUrl}/login`,params)
   /* .pipe(
      map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      }))
  }*/
}
