import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-router',
  templateUrl: './login-router.component.html',
  styleUrls: ['./login-router.component.css'],
  providers : [UserService]
})
export class LoginRouterComponent implements OnInit {
login;

  constructor(private userService: UserService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.login =  {
      email:'',
      password:''
    };
  }

  loginUser(form:NgForm){
    // this.userService.fetchfeed();
    this.userService.userLogin(this.login).subscribe(
        response => {
          // this.message('Successfully logged in!');
          // alert('Successfully logged in! ')
          this.router.navigate(['../feed']);
        },
        error => {
          alert('Invalid Credentials');
        }
    );
  }
}