import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthGuardService = class AuthGuardService {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.userService.isAuthenticated()
            .then((authenticated) => {
            if (authenticated) {
                return true;
            }
            else {
                this.router.navigate(['/']);
            }
        });
    }
    canActivateChild(route, state) {
        return this.canActivate(route, state);
    }
};
AuthGuardService = __decorate([
    Injectable({ providedIn: 'root' })
], AuthGuardService);
export { AuthGuardService };
//# sourceMappingURL=auth-guard.service.js.map