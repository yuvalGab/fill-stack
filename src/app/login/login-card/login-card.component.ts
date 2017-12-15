import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {
  error:string = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmit(data) {
    const { valid, value } = data;
    if (valid) {
      this.error = '';
      console.log(value);
    } else {
      this.error = 'please fill in valid fields';
    }
  }

}
