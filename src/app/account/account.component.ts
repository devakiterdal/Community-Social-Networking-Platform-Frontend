import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers : [UserService]
})
export class AccountComponent implements OnInit {
  profile;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.profile = {
      first_name:'',
      last_name:'',
      father_name:'',
      mother_name:'',
      birthdate:'',
      gender:'',
      phoneno:'',
      email:'',
      city:'',
      state:'',
      country:'',
      pincode:''
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

  userprofile(form: NgForm){
    console.log(form);
    console.log("hello"+form.valid);
  }

  radioChangeHandler(event) {
      this.profile.gender=event.value;
    }
}
