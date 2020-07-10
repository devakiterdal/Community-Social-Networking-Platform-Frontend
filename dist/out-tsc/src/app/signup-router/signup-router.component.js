import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
let SignupRouterComponent = class SignupRouterComponent {
    constructor(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.changesSaved = false;
    }
    ngOnInit() {
        this.register = {
            username: '',
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        };
    }
    registerUser(form) {
        this.userService.registerNewUser(this.register).subscribe(response => {
            // console.log("Successfully registered!!Please do Login");
            localStorage.setItem('profile', JSON.stringify(response));
            this.router.navigate(['../login']);
            alert(this.register.username + " " + 'has been registerd.!Please do login');
        }, error => {
            alert('Email address already exist!');
        });
    }
    canDeactivate() {
        if (this.registrationForm.dirty) {
            return confirm("do you want to proceed.. You will loose the data");
        }
        else {
            return true;
        }
    }
};
__decorate([
    ViewChild('f')
], SignupRouterComponent.prototype, "registrationForm", void 0);
SignupRouterComponent = __decorate([
    Component({
        selector: 'app-signup-router',
        templateUrl: './signup-router.component.html',
        styleUrls: ['./signup-router.component.css'],
        providers: [UserService]
    })
], SignupRouterComponent);
export { SignupRouterComponent };
//# sourceMappingURL=signup-router.component.js.map