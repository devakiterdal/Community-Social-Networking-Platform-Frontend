import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { UserService } from '../user.service';
let AccountComponent = class AccountComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.profile = {
            first_name: '',
            last_name: '',
            father_name: '',
            mother_name: '',
            birthdate: '',
            gender: '',
            phoneno: '',
            email: '',
            city: '',
            state: '',
            country: '',
            pincode: ''
        };
    }
    // userprofile(form: NgForm){
    //   this.userService.saveprofile(this.profile).subscribe(
    //       response => {
    //         // this.router.navigate(['../loginRouter']);
    //         alert('Your details has been saved')
    //         console.log(form);
    //       },
    //       error => console.log('error', error)
    //   );
    // }
    // radioChangeHandler(event) {
    //   this.profile.gender =event.value;
    // }
    userprofile(form) {
        console.log(form);
        console.log("hello" + form.valid);
    }
    radioChangeHandler(event) {
        this.profile.gender = event.value;
    }
};
AccountComponent = __decorate([
    Component({
        selector: 'app-account',
        templateUrl: './account.component.html',
        styleUrls: ['./account.component.css'],
        providers: [UserService]
    })
], AccountComponent);
export { AccountComponent };
//# sourceMappingURL=account.component.js.map