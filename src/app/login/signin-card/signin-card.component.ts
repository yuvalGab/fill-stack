import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin-card',
  templateUrl: './signin-card.component.html',
  styleUrls: ['./signin-card.component.css']
})
export class SigninCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(e, fullName, email, username, password, retypePassword) {
    e.preventDefault()
    console.log('full name: ', fullName)
    console.log('email: ', email)
    console.log('username: ', username)
    console.log('password: ', password)
    console.log('retype password: ', retypePassword)
  }

}
