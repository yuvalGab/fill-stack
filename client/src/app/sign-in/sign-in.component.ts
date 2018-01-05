import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  error:string = '';
  success:string = '';
  
  constructor(private router: Router, private user:UserService) { }

  ngOnInit() {
  }

  onSubmit(data) {
    const { valid, value } = data;
    if (valid) {
      this.user.login(value).subscribe(isLogin => {
        if (isLogin) {
          this.error = '';
          this.success = 'login successful';
          setTimeout(() => {
            this.router.navigate(['home']);
          }, 1000)
        } else {
          this.error = 'the username or/and password is incorrect';
        }
      });
     
    } else {
      this.error = 'please fill in valid fields';
    }
  }
}
