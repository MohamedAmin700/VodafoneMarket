import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    var value = localStorage.getItem('occ');
    var canActive;
    var permission = route.data['permission'];
    if (value != null) {
      canActive = permission.only.includes(value);
      if (!canActive) {
        this.router.navigate(['Login']);
      }

      return canActive;
    }

    this.router.navigate(['Login']);
    return false;
  }
}
