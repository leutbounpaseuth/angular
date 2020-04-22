import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { SharedDataService } from './shared-data.service';

@Injectable({
  providedIn: 'root',
})
export class CanActivateWhenLoggedIn implements CanActivate {
  constructor(public sharedData: SharedDataService, public router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let rc: boolean =
      this.sharedData.sessionId !== null &&
      this.sharedData.sessionId !== undefined;

    if (!rc) {
      this.router.navigate(['login']);
    }

    return rc;
  }
}
