import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  error:string = '';
  success:string = '';
  
  constructor(
    private router:Router, 
    private user:UserService, 
    private loader:LoaderService
  ) { }

  ngOnInit() {
    this.user.isLogedIn().subscribe(isLogedIn => {
      if (isLogedIn) {
        this.router.navigate(['home']);
      }
    })
  }

  onSubmit(data) {
    const { valid, value } = data;
    if (valid) {
      this.loader.show();
      this.user.login(value).subscribe(({ error }) => {
        this.loader.hide();
        if (!error) {
          this.error = '';
          this.success = 'login successful';
          setTimeout(() => {
            this.router.navigate(['home']);
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
