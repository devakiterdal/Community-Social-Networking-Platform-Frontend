import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contentfeed',
  templateUrl: './contentfeed.component.html',
  styleUrls: ['./contentfeed.component.css'],
  providers:[UserService]
})
export class ContentfeedComponent implements OnInit {
  posts;
  // feedsArr = [ {username:'Manu', description: 'Test Feed', date: '2017-05-25 05:30'},
  //             {username:'Max', description: 'Test Feed', date: '2017-05-25 05:30'},
  //             {username:'Mike', description: 'Test Feed', date: '2017-05-25 05:30'}];

  feedsArr = [];

  constructor( private userService:UserService ) { }

  ngOnInit(): void {

    this.fetchpost();

    this.posts = {
      description:'',
      // post_time:'',
      username:'devakiterdal', //get it from local storage
      isActive: true
    };
  }
  
  // To Create Post
  datafeed(form:NgForm){
    // alert("Please complete your profile!!");
    this.userService.feeddata(this.posts).subscribe(
      response =>{
        alert('Posted Successfully!!!');
        },
        error => {
          alert('Not Posted');
      }
    )

    this.fetchpost();
  }

  fetchpost(){
    this.userService.fetchfeed().subscribe(
      response =>{
        for(let item in response) {
          this.feedsArr.push(response[item]);
        }
        console.log(this.feedsArr);
      });
  }
}