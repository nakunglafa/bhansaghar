import { Router,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { authService } from '../shared/auth.service';

@Injectable()
export class authGuard implements CanActivate{
    constructor(private authService:authService,private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  if (!this.authService.isLoggedin()) {
      console.log('not');
        this.router.navigate(['/login']);
        return false;  
  }
  else {
    return true;
  }
}

}