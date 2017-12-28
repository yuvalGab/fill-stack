import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  error:string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(data) {
    const { valid, value } = data;
    if (valid && value.password === value.retypePassword) {
      this.error = '';
      console.log(value);
      this.router.navigate(['sign-in']);
    } else {
      this.error = 'please fill in valid fields';
    }
  }
}
