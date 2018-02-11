import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showLogout:boolean = false;

  constructor(
    private router:Router, 
    private user:UserService, 
    private loader:LoaderService
  ) { }

  ngOnInit() {
    this.user.isLogin.subscribe(result => {
      this.showLogout = result;
    });
  }

  onLogOut() {
    this.loader.show();
    this.user.logout().subscribe(result => {
      this.loader.hide();
      if (result) {
        this.router.navigate(['sign-in']);
      }
    });
  }
}
