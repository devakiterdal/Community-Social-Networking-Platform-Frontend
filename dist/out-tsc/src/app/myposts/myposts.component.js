import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MypostsComponent = class MypostsComponent {
    constructor(userService) {
        this.userService = userService;
        this.MyPostsArr = [];
    }
    ngOnInit() {
        // localStorage.getItem("")
        this.fetchMyPost("varun");
    }
    fetchMyPost(username) {
        this.userService.fetchMyPosts(username).subscribe(response => {
            for (let item in response) {
                this.MyPostsArr.push(response[item]);
            }
        });
    }
};
MypostsComponent = __decorate([
    Component({
        selector: 'app-myposts',
        templateUrl: './myposts.component.html',
        styleUrls: ['./myposts.component.css']
    })
], MypostsComponent);
export { MypostsComponent };
//# sourceMappingURL=myposts.component.js.map