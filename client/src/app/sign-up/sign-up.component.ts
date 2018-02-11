import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  error:string = '';
  success:string = '';

  constructor(
    private router:Router, 
    private user:UserService, 
    private loader:LoaderService
  ) { }

  ngOnInit() {
  }

  onSubmit(data) {
    const { valid, value } = data;
    if (valid && value.password === value.retypePassword) {
      delete value['retypePassword'];
      this.loader.show();
      this.user.create(value).subscribe(({ error }) => {
        this.loader.hide();
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
