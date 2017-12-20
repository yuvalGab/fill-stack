import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { TopicComponent } from './topic/topic.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent},
  { path: 'home', component: HomeComponent },
  { path: 'zone/:name', component: ListComponent, data: { type: 'zone'} },
  { path: 'subject/:id', component: ListComponent, data: { type: 'subject'} },
  { path: 'topic/:id', component: TopicComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
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
