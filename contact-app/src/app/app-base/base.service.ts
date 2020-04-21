import { SharedDataService } from '../app-base/shared-data.service';

export class BaseService {
  constructor(protected sharedData: SharedDataService) {}

  protected callService(observable, callback) {
    observable.subscribe(
      (response) => {
        if (callback) {
          callback(response);
        }
      },
      (err) => this.sharedData.reportError(err)
    );
  }
}
