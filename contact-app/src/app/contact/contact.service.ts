import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SharedDataService } from '../app-base/shared-data.service';
import { BaseService } from '../app-base/base.service';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService extends BaseService {
  constructor(public httpClient: HttpClient, sharedData: SharedDataService) {
    super(sharedData);
  }

  listAll(callback) {
    this.callService(
      this.httpClient.get<Contact[]>('http://localhost:5000/api/contact', {
        params: { sessionId: this.sharedData.sessionId },
      }),
      callback
    );
  }
}
