import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn:boolean;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

    if(localStorage.getItem('user'))
      this.isLoggedIn = true;
    else  
      this.isLoggedIn = false;
  }

  logout() {
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.router.navigate(["/"]);
  }

}
