import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.css']
})
export class MypostsComponent implements OnInit {
  MyPosts;
  MyPostsArr = []
  username = '';
  image='';
  description='';
  selectedfile: File = null;
  editPostFlag = [];
  constructor( private userService:UserService ) { }

  ngOnInit(): void {
    this.username = JSON.parse(localStorage.getItem('user'))?.username;
    this.fetchMyPost(this.username);  
  }

  fetchMyPost(username){
    this.MyPostsArr.splice(0,this.MyPostsArr.length);
    this.userService.fetchMyPosts(username).subscribe(
      response =>{
        for(let item in response) {
            response[item].image = 'http://127.0.0.1:8000'+response[item].image;
          this.MyPostsArr.push(response[item]);
        }
      });
  }

  toggleEditPostFlag(index) {
    this.editPostFlag[index] = !this.editPostFlag[index];
  }

  updatePost(post_id,description,image) {
    // let data = {
    //   description: description,
    //   image: image,
    //   username: this.username
    // };
    let data = this.onUpload(description,image);
    this.userService.updatePost(post_id,data).subscribe(
      response =>{
        
        this.fetchMyPost(this.username);
        console.log(response);

      });
  }

  deletePost(post_id) {
    let confirmMsg = confirm("Do you want to permentatly delete?");
    if(confirmMsg){
      this.userService.deletePost(post_id).subscribe(
        rersponse => {
          this.fetchMyPost(this.username);
        });
    }
  }

  onFileSelect(event){
    this.selectedfile = <File> event.target.files[0];
    console.log(event);
  }

  onUpload(description,image){
    let fd = new FormData();
    // fd.append('image',this.posts.image);
    fd.append('description', description );
    fd.append('image', this.selectedfile, this.selectedfile.name);
    fd.append('username', this.userService.getUsername())
    return fd;
  }
}
