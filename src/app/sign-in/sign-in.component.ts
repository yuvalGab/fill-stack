import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
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
