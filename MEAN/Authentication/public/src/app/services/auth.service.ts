import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: HttpClient) { }

  registerUser(user: any): any {
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.post('http://localhost:6789/register', user, httpHead);
  }

  authenticateUser(user: any): any {
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.post('http://localhost:6789/authenticate', user, httpHead);
  }

  getProfile(): any {
    this.loadToken();
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        // tslint:disable-next-line:object-literal-key-quotes
        'Authorization': this.authToken
      })
    };
    return this.http.get('http://localhost:6789/profile', httpHead);
  }

  editUser(user: object): any {
    this.loadToken();
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        // tslint:disable-next-line:object-literal-key-quotes
        'Authorization': this.authToken
      })
    };
    return this.http.patch('http://localhost:6789/users', user, httpHead);
  }

  deleteUser(): any {
    this.loadToken();
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        // tslint:disable-next-line:object-literal-key-quotes
        'Authorization': this.authToken
      })
    };
    return this.http.delete('http://localhost:6789/users', httpHead);
  }

  storeUserData(token: string, user: any): void {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loggedIn(): boolean {
    return localStorage.getItem('id_token') !== null;
  }

  logout(): void {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  loadToken(): void {
    this.authToken = localStorage.getItem('id_token');
  }
}
