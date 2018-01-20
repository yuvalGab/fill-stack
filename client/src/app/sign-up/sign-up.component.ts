import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  error:string = '';
  success:string = '';

  constructor(private router:Router, private user:UserService) { }

  ngOnInit() {
  }

  onSubmit(data) {
    const { valid, value } = data;
    if (valid && value.password === value.retypePassword) {
      delete value['retypePassword'];
      this.user.create(value).subscribe(({ error }) => {
        if (!error) {
          this.error = '';
          this.success = 'user created successfully';
          setTimeout(() => {
            this.router.navigate(['sign-in']);
          }, 1000)
        } else {
          this.error = error;
        }
      });
    } else {
      this.error = 'please fill in valid fields';
    }
  }
}
