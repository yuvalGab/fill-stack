import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService]
})
export class HomeComponent implements OnInit {
  fullName:string = '';

  constructor(private user:UserService, private snackBar:MatSnackBar) { }

  ngOnInit() {
    this.user.getFullName().subscribe(({ error, fullName }) => {
      if (!error) {
        this.fullName = fullName;
      } else {
        this.snackBar.open(error, '', { duration: 2000 });
      }
    })
  } 

}
