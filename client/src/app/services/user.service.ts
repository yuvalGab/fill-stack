import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http:Http) { }

  create(newUser:Object) {
    return this.http.post('/api/user/create', newUser).map(res => res.json());
  }

  login(user) {
    return this.http.post('/api/user/login', user).map(res => res.json());
  }

}
