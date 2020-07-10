import { 
        CanActivate, 
        ActivatedRouteSnapshot,
        RouterStateSnapshot, 
        Router, 
        CanActivateChild 
    } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class AuthGuardService implements CanActivate, CanActivateChild {
    constructor(private userService: UserService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.userService.isAuthenticated() 
        .then(
            (authenticated: boolean) => {
                if(authenticated) {
                    return true;
                } else {
                    this.router.navigate(['/']);
                }
            }
        )
        
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(route, state);
    }
}