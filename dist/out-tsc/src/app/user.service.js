import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let UserService = class UserService {
    // isAuthenticated: boolean = false; //hard coded value
    constructor(http) {
        this.http = http;
        this.isLoggedIn = false;
    }
    registerNewUser(userData) {
        return this.http.post('http://127.0.0.1:8000/register', userData);
    }
    userLogin(userData) {
        this.isLoggedIn = true;
        return this.http.post('http://127.0.0.1:8000/login', userData);
    }
    userLogout(userData) {
        this.isLoggedIn = false;
        return this.http.post('http://127.0.0.1:8000/login', userData);
    }
    saveprofile(userData) {
        return this.http.post('http://127.0.0.1:8000/profile', userData);
    }
    fetchfeed() {
        return this.http.get('http://127.0.0.1:8000/posts');
    }
    feeddata(userData) {
        return this.http.post('http://127.0.0.1:8000/posts', userData);
    }
    fetchMyPosts(username) {
        return this.http.get('http://127.0.0.1:8000/MyPosts', username);
    }
    isAuthenticated() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (localStorage.getItem('user'))
                    resolve(true);
                else
                    resolve(false);
            }, 1);
        });
        return promise;
    }
};
UserService = __decorate([
    Injectable({ providedIn: 'root' })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map