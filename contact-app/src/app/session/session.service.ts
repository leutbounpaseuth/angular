import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(public httpClient: HttpClient) {}

  checkLogin(username: string, password: string, callback) {
    this.httpClient
      .post('http://localhost:5000/api/session', {
        login: username,
        password: password,
      })
      .subscribe(
        (response) => callback(response),
        (err) => alert('ERROR !' + err)
      );
  }
}
