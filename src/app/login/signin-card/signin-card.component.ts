import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin-card',
  templateUrl: './signin-card.component.html',
  styleUrls: ['./signin-card.component.css']
})
export class SigninCardComponent implements OnInit {
  error:string = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmit(data) {
    const { valid, value } = data;
    if (valid) {

      // TODO: chack if password === retype password
      
      this.error = '';
      console.log(value);
    } else {
      this.error = 'please fill in valid fields';
    }
  }

}
