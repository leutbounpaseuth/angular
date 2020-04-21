import { SharedDataService } from '../app-base/shared-data.service';

export class BaseService {
  constructor(protected sharedData: SharedDataService) {}

  protected callService(observable, callback) {
    observable.subscribe(
      (response) => {
        console.log('response=' + response);
        if (callback) {
          callback(response);
        }
      },
      (err) => {
        console.log('err=' + err);
        this.sharedData.reportError(err);
      }
    );
  }
}
