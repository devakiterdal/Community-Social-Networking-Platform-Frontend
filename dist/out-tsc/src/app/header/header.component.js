import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HeaderComponent = class HeaderComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        if (localStorage.getItem('user'))
            this.isLoggedIn = true;
        else
            this.isLoggedIn = false;
    }
    logout() {
        localStorage.removeItem('user');
        this.isLoggedIn = false;
    }
};
HeaderComponent = __decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css']
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map