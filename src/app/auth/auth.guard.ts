import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanDeactivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanDeactivate<unknown> {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    if (this.authService.isLoggedIn()) {
      if (this.isPublicRoute(state.url)) {
        console.log('User is logged in. Redirecting to mainpage.');
        this.router.navigate(['/mainpage']);
        return false;
      }
      console.log('Auth success.');
      return true;
    } else {
      if (this.isPublicRoute(state.url)) {
        return true;
      }
      console.log('Auth failed. Redirecting to login.');
      this.router.navigate(['/login']);
      return false;
    }
  }

  canDeactivate(): boolean {
    if (this.authService.isLoggedIn()) {
      console.log('User is logged in. Preventing navigation.');
      return false;
    } else {
      console.log('User is not logged in. Allowing navigation.');
      return true;
    }
  }

  private isPublicRoute(url: string): boolean {
    return url === '/' || url === '/login' || url === '/signup';
  }
}
