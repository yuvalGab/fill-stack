import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './services/user.service';

@Injectable()
export class UserGuard implements CanActivate {
  constructor(private user:UserService, private router:Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isLogedIn = this.user.isLogedIn();
    isLogedIn.subscribe(res => {
      if (!res) {
        this.router.navigate(['sign-in']);
      }
    });
  
    return isLogedIn;
}
