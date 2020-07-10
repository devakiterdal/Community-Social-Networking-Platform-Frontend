import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})

export class UserService {

  isLoggedIn = false;

  constructor(private http: HttpClient) { }

  registerNewUser(userData):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/register',userData);
  }

  userLogin(userData):Observable<any>{
    this.isLoggedIn = true;
    return this.http.post('http://127.0.0.1:8000/login',userData);
  }

  userLogout(userData):Observable<any>{
    this.isLoggedIn = false;
    return this.http.post('http://127.0.0.1:8000/login',userData);
  }  

  getProfileDetails(email):Observable<any>{
    return this.http.get('http://127.0.0.1:8000/my-profile/'+email);
  }

  updateProfileDetails(email,userData):Observable<any>{
    return this.http.put('http://127.0.0.1:8000/update-my-profile/'+email,userData);
  }

  fetchfeed(){
    return this.http.get('http://127.0.0.1:8000/posts');
  }

  feeddata(userData):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/posts',userData);
  }

  fetchMyPosts(username):Observable<any>{
    return this.http.get('http://127.0.0.1:8000/my-posts/'+username);
  }

  updatePost(post_id, data):Observable<any>{
    return this.http.put('http://127.0.0.1:8000/update/'+post_id, data);
  }

  deletePost(post_id):Observable<any>{
    return this.http.delete('http://127.0.0.1:8000/delete/'+post_id);
  }

  getRegisteredUserCount():Observable<any>{
    return this.http.get('http://127.0.0.1:8000/total-users-registerd');
  }

  getRegisteredMaleCount():Observable<any>{
    return this.http.get('http://127.0.0.1:8000/total-male');
  }
  
  getRegisteredFemaleCount():Observable<any>{
    return this.http.get('http://127.0.0.1:8000/total-female');
  }

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          if(localStorage.getItem('user'))
            resolve(true);
          else  
            resolve(false);
        }, 1);
      }
    );
    return promise;
  }

  getUsername(){
    let username = JSON.parse(localStorage.getItem('user'))?.username;
    return username;
    }

}
