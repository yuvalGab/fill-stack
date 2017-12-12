import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(e, username, password, rememberMe) {
    e.preventDefault()
    console.log('username: ', username)
    console.log('password: ', password)
    console.log('remember me: ', rememberMe)
  }

}
