import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent},
  { path: 'home', component: HomeComponent }
];

@NgModule({
  exports: [ 
    RouterModule 
  ],
  imports: [
    RouterModule.forRoot(routes) 
  ],
  declarations: []
})
export class AppRoutingModule { }
