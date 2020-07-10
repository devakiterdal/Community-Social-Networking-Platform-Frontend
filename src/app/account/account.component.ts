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
  email='';
  selectedfile: File = null;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.profile = {
      image:'',
      first_name: '',
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
      pincode:'',
    };
  
    this.email = JSON.parse(localStorage.getItem('user'))?.email;
    this.getProfileDetailsHandler(this.email);
  }
  
  onFileSelect(event){
    this.selectedfile = <File> event.target.files[0];
    console.log(event.target.files[0]);
  }


  updateProfileDetailsHandler(form: NgForm){ 
    let data = this.onUpload();
    this.userService.updateProfileDetails(this.email, data)
      .subscribe(
        response => {
          alert('Your details has been saved');
          this.getProfileDetailsHandler(this.email);
          console.log(form);
        },        
        error => {
          console.log('error', error);
        }
      );
  }

  radioChangeHandler(event) {
    this.profile.gender=event.value;
  }

  getProfileDetailsHandler(email){
    this.userService.getProfileDetails(email)
    .subscribe(
      response => {
        console.log(response);
        for(let i in response){
          this.profile.first_name = response[i].first_name
          this.profile.last_name = response[i].last_name
          this.profile.father_name = response[i].father_name
          this.profile.mother_name = response[i].mother_name
          this.profile.birthdate = response[i].birthdate
          this.profile.gender = response[i].gender
          this.profile.phoneno = response[i].phoneno
          this.profile.email = response[i].email
          this.profile.city = response[i].city
          this.profile.state = response[i].state
          this.profile.pincode = response[i].pincode
          this.profile.country = response[i].country
          this.profile.image = 'http://127.0.0.1:8000'+response[i].image;
        }
      });
  }

  onUpload(){
    let fd = new FormData();
    fd.append('first_name', this.profile.first_name );
    fd.append('last_name', this.profile.last_name );
    fd.append('father_name', this.profile.father_name );
    fd.append('mother_name', this.profile.mother_name );
    fd.append('birthdate', this.profile.birthdate );
    fd.append('gender', this.profile.gender );
    fd.append('phoneno', this.profile.phoneno );
    fd.append('email', this.profile.email );
    fd.append('city', this.profile.city );
    fd.append('state', this.profile.state );
    fd.append('country', this.profile.country);
    fd.append('image', this.selectedfile, this.selectedfile.name);
    return fd;
  }
}
