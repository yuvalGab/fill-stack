import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showLogout:boolean = false;

  constructor(private router:Router, private user:UserService) { }

  ngOnInit() {
    this.user.isLogin.subscribe(result => {
      this.showLogout = result;
    });
  }

  onLogOut() {
    this.user.logout().subscribe(result => {
      if (result) {
        this.router.navigate(['sign-in']);
      }
    });
  }
}
