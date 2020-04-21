import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  constructor() {}

  sessionId: string;
  errorMessage: string;

  clearError() {
    this.errorMessage = null;
  }

  reportError(err: any) {
    if (err) {
      if (typeof err === 'string') {
        this.errorMessage = err;
      } else if (typeof err === 'object') {
        if (err['message']) {
          this.errorMessage = err['message'];
        } else if (err['status']) {
          this.errorMessage = err['status'] + ' ' + err['error'];
        } else {
          this.errorMessage = err.toString();
        }
      }
    } else {
      this.errorMessage = null;
    }
  }
}
