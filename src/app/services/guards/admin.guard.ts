import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminGuard implements CanActivate {

  // constructor(private _servicesUser: any) { }   // Ejemplo de un servicio de Usuario

  canActivate() {

    // if (this._servicesUser.user.role === 'ADMIN') {
    if (true) {
      return true;
    }
    else {
      console.log('Bloqueado por el Guard');
      // this._servicesUser.logout();
      return false;
    }
  }
}
