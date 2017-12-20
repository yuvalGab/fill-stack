import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
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
