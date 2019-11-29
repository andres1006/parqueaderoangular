import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginPageServiceService } from '../../../seguridad/login-page/login-page-service.service';
import { Router, CanActivate } from '@angular/router';



@Injectable()
export class LoginGuardGuard implements CanActivate {
 
    constructor(
      public router: Router,
      public loginSerice: LoginPageServiceService
    ) {}
   
    canActivate () {
      if (this.loginSerice.estaLogueado()) {
        return true;
      } else {
        this.router.navigate(['']);
        sessionStorage.clear();
        return false;
      }
    }
  }
  