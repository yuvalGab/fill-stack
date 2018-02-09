import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  public isLogin:Subject<any> = new Subject();

  constructor(private http:Http) { }

  create(newUser:Object) {
    return this.http.post('/api/user/create', newUser).map(res => res.json());
  }

  login(user) {
    return this.http.post('/api/user/login', user).map(res => {
      const isLogin = res.json();
      this.isLogin.next(isLogin);
      return isLogin;
    });
  }

  logout() {
    return this.http.get('/api/user/logout').map(res => { 
      const isLogout = res.json();
      this.isLogin.next(!isLogout);
      return isLogout;
    });
  }

  isLogedIn() {
    return this.http.get('/api/user/isLogedIn').map(res => {
      const isLogin = res.json();
      this.isLogin.next(isLogin);
      return isLogin;
    });
  }

  getFullName() {
    return this.http.get('/api/user/getFullName').map(res => res.json());
  }
}
