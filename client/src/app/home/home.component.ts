import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService]
})
export class HomeComponent implements OnInit {
  fullName:string = '';

  constructor(private user:UserService) { }

  ngOnInit() {
    this.user.getFullName().subscribe(res => {
      this.fullName = res.fullName;
    })
  }

}
