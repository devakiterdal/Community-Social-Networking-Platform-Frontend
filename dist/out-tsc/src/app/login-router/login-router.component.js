import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { UserService } from '../user.service';
let LoginRouterComponent = class LoginRouterComponent {
    constructor(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.login = {
            email: '',
            password: ''
        };
    }
    loginUser(form) {
        // this.userService.fetchfeed();
        this.userService.userLogin(this.login).subscribe(response => {
            localStorage.setItem('user', JSON.stringify(response));
            // this.message('Successfully logged in!');
            // alert('Successfully logged in! ')
            this.router.navigate(['../posts']);
        }, error => {
            alert('Invalid Credentials');
        });
    }
};
LoginRouterComponent = __decorate([
    Component({
        selector: 'app-login-router',
        templateUrl: './login-router.component.html',
        styleUrls: ['./login-router.component.css'],
        providers: [UserService]
    })
], LoginRouterComponent);
export { LoginRouterComponent };
//# sourceMappingURL=login-router.component.js.map