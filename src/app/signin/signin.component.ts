import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
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
