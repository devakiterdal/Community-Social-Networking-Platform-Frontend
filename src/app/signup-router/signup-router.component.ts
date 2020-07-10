import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { canDeactivateGuard } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup-router',
  templateUrl: './signup-router.component.html',
  styleUrls: ['./signup-router.component.css'],
  providers : [UserService]
})
export class SignupRouterComponent implements OnInit, canDeactivateGuard {
  register;

  changesSaved = false;
  @ViewChild('f') registrationForm: NgForm;

  constructor(private userService: UserService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.register = {
      username:'',
      first_name:'',
      last_name:'',
      email:'',
      password:''
    };
  }
  registerUser(form: NgForm){
    this.userService.registerNewUser(this.register).subscribe(
        response => {
          // console.log("Successfully registered!!Please do Login");
          localStorage.setItem('profile', JSON.stringify(response));
          this.router.navigate(['../login'])
          alert(this.register.username +" "+'has been registerd.!Please do login') 
        },
        error => {
          alert('Email address already exist!')
        }
    );
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean  {
    if(this.registrationForm.dirty) {
      return confirm("do you want to proceed.. You will loose the data");
    }else {
      return true;
    }
    
  }
}

