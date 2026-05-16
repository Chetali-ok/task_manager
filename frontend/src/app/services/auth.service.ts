import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post(`${this.apiUrl}/login/`, data);
  }

  signup(data: any) {
    return this.http.post(`${this.apiUrl}/signup/`, data);
  }
}
