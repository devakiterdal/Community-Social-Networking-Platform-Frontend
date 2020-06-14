import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup-router',
  templateUrl: './signup-router.component.html',
  styleUrls: ['./signup-router.component.css'],
  providers : [UserService]
})
export class SignupRouterComponent implements OnInit {
  register;

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
          this.router.navigate(['../login'])
          alert(this.register.username +" "+'has been registerd.!Please do login') 
        },
        error => {
          alert('Dear user username '+this.register.username+' must be unique!')
        }
    );
  }
}

