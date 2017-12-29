import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  error:string = '';
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(data) {
    const { valid, value } = data;
    if (valid) {
      this.error = '';
      console.log(value);
      this.router.navigate(['home']);
    } else {
      this.error = 'please fill in valid fields';
    }
  }
}
