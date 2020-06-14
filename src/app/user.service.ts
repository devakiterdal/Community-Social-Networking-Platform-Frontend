import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class UserService {

  constructor(private http: HttpClient) { }

  registerNewUser(userData):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/register',userData);
  }

  userLogin(userData):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/login',userData);
  }

  saveprofile(userData):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/profile',userData);
  }

  fetchfeed(){
    return this.http.get('http://127.0.0.1:8000/posts');
  }

  feeddata(userData):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/posts',userData);
  }
  
}
