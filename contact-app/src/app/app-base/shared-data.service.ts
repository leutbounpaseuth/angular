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
    this.errorMessage = err;
  }
}
