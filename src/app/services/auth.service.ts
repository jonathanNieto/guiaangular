import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { map } from 'rxjs/operators';
import { stringify } from 'querystring';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey = 'AIzaSyB59PzUpxFQOHPi8HBC36rVUV-qkLL84dI';
  userToken: string;
  constructor(private http: HttpClient) { 
    this.getToken();
  }

  login(user: UserModel) {
    const authData = {
      /* email: user.email,
      password: user.password,  es 'equivalente' a lo siguiente*/
      ...user,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}signInWithPassword?key=${this.apiKey}`,
      authData
    ).pipe(
      map((resp) => {
        this.saveToken(resp['idToken'], resp['expiresIn']);        
        return resp;
      })
    );
  }

  logout() {
    localStorage.removeItem('guiaangularToken');
  }

  register(user: UserModel) {
    const authData = {
      email: user.email,
      password: user.password,
      /* o ...user  es 'equivalente' a lo anterior*/
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}signUp?key=${this.apiKey}`,
      authData
    ).pipe(
      map((resp) => {
        this.saveToken(resp['idToken'], resp['expiresIn']);
        return resp;
      })
    );
  }

  private saveToken(idToken: string, expiresIn: string) {
    this.userToken = idToken;
    localStorage.setItem('guiaangularToken', idToken);

    let today = new Date();
    console.log(expiresIn);
    today.setSeconds(Number(expiresIn));
    console.log(today.getTime().toString());
    localStorage.setItem('expDate', today.getTime().toString());
  }

  private getToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('guiaangularToken');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

  isAuthenticated(): boolean {
    if (this.userToken.length < 2) {
      return false;
    }
    const expDate = new Date();
    expDate.setTime(Number(localStorage.getItem('expDate')));

    if (expDate > new Date()) {
      return true;
    } else {
      return false;
    }
  }

}
