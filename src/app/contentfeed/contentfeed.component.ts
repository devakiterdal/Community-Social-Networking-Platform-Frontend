import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contentfeed',
  templateUrl: './contentfeed.component.html',
  styleUrls: ['./contentfeed.component.css'],
  providers:[UserService]
})
export class ContentfeedComponent implements OnInit {
  posts;
  selectedfile: File = null;
  userdata;
  feedsArr = [];

  constructor( private userService:UserService, private http:HttpClient ) { }

  ngOnInit(): void {

    this.fetchpost();

    this.posts = {
      description:'',
      image:'',
      username:'', //get it from local storage
      isActive: true
    };
  }
  
  // To Create Post
  datafeed(form : NgForm){
    let data = this.onUpload();
    this.userService.feeddata(data).subscribe(
      response =>{
        alert('Posted Successfully!!!');
        this.fetchpost();
        form.reset();
        },
        error => {
          alert('Not Posted');
      });
    }

  onFileSelect(event){
    this.selectedfile = <File> event.target.files[0];
    console.log(event);
  }

  onUpload(){
    let fd = new FormData();
    fd.append('description', this.posts.description );
    fd.append('isActive', 'true' );
    fd.append('image', this.selectedfile, this.selectedfile.name);
    fd.append('username', this.userService.getUsername())
    return fd;
  }

  fetchpost(){
    this.feedsArr.splice(0,this.feedsArr.length);
    this.userService.fetchfeed().subscribe(
      response =>{
        for(let item in response) {
          // console.log(item);
          response[item].image = 'http://127.0.0.1:8000'+response[item].image;
          this.feedsArr.push(response[item]);
        }
      });
    }
}