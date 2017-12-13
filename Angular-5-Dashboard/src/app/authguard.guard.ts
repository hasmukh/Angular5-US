import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginserService } from './loginser.service';


@Injectable()
export class AuthguardGuard implements CanActivate {

constructor(private loginser: LoginserService){}

  canActivate (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
    // return this.loginser.setUserLoggedIn();
    return true;
  }
}
