import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class MediaService {

  test = 'Matafaka';
  username: string;
  password: string;
  status: string;

  apiUrl = 'http://media.mw.metropolia.fi/wbma';
  mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

  constructor (private http: HttpClient, private router: Router) {

  }

  getNewFiles() {
    return this.http.get(this.apiUrl + '/media');
  }

  public login() {
    console.log(this.username);
    console.log(this.password);

    const body = {
      username: this.username,
      password: this.password
    };

    const settings = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    this.http.post(this.apiUrl + '/login', body, settings).
      subscribe(response => {
        // correct way would be to create an interface to the response object ?
        console.log(response['token']);
        localStorage.setItem('token', response['token']);
        this.router.navigate(['front']);
    }, (error: HttpErrorResponse) => {
        console.log(error.error.message);
        this.status = error.error.message;
    });
  }

  getUserInfo() {
    const settings = {
      headers: new HttpHeaders().set('x-access-token', localStorage.getItem('token')),
    };
    return this.http.get(this.apiUrl + '/users/user', settings);
  }

  register(user) {
    return this.http.post(this.apiUrl + '/users', user);
  }

  upload(formData) {
    const settings = {
      headers: new HttpHeaders().set('x-access-token', localStorage.getItem('token')),
    };
    return this.http.post(this.apiUrl + '/media', formData, settings);
  }

}
