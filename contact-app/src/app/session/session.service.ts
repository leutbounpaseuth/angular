import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SharedDataService } from '../app-base/shared-data.service';
import { BaseService } from '../app-base/base.service';

@Injectable({
  providedIn: 'root',
})
export class SessionService extends BaseService {
  constructor(public httpClient: HttpClient, sharedData: SharedDataService) {
    super(sharedData);
  }

  login(username: string, password: string, callback) {
    this.callService(
      this.httpClient.post('http://localhost:5000/api/session', {
        login: username,
        password: password,
      }),
      (response) => {
        this.sharedData.sessionId = response.sessionId;

        if (callback) {
          callback(response);
        }
      }
    );
  }

  logout(callback) {
    this.callService(
      this.httpClient.delete('http://localhost:5000/api/session', {
        params: {
          sessionId: this.sharedData.sessionId,
        },
      }),
      (response) => {
        this.sharedData.sessionId = null;

        if (callback) {
          callback(response);
        }
      }
    );
  }
}
