import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { UserService } from '../user.service';
let ContentfeedComponent = class ContentfeedComponent {
    constructor(userService) {
        this.userService = userService;
        // feedsArr = [ {username:'Manu', description: 'Test Feed', date: '2017-05-25 05:30'},
        //             {username:'Max', description: 'Test Feed', date: '2017-05-25 05:30'},
        //             {username:'Mike', description: 'Test Feed', date: '2017-05-25 05:30'}];
        this.feedsArr = [];
    }
    ngOnInit() {
        this.fetchpost();
        this.posts = {
            description: '',
            // post_time:'',
            username: 'varun',
            isActive: true
        };
    }
    // To Create Post
    datafeed(form) {
        // alert("Please complete your profile!!");
        this.userService.feeddata(this.posts).subscribe(response => {
            alert('Posted Successfully!!!');
        }, error => {
            alert('Not Posted');
        });
        this.fetchpost();
    }
    fetchpost() {
        this.userService.fetchfeed().subscribe(response => {
            for (let item in response) {
                this.feedsArr.push(response[item]);
            }
            localStorage.setItem('posts', JSON.stringify(this.feedsArr));
            console.log(this.feedsArr);
        });
    }
};
ContentfeedComponent = __decorate([
    Component({
        selector: 'app-contentfeed',
        templateUrl: './contentfeed.component.html',
        styleUrls: ['./contentfeed.component.css'],
        providers: [UserService]
    })
], ContentfeedComponent);
export { ContentfeedComponent };
//# sourceMappingURL=contentfeed.component.js.map