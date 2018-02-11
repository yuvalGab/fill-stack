import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './/app-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { HttpModule } from '@angular/http';
import { MatDialogModule  } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { TopicComponent } from './topic/topic.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MenuComponent } from './common/menu/menu.component';
import { ItemComponent } from './list/item/item.component';
import { SelectLevelComponent } from './common/select-level/select-level.component';
import { ModalComponent } from './list/modal/modal.component';
import { FilterComponent } from './list/filter/filter.component';
import { ResourcesComponent } from './topic/resources/resources.component';
import { LoaderComponent } from './common/loader/loader.component';

import { UserService } from './services/user.service';
import { SubjectService } from './services/subject.service';
import { TopicService } from './services/topic.service';
import { ResourceService } from './services/resource.service';
import { LoaderService } from './services/loader.service';
import { UserGuard } from './user.guard';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignUpComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    ListComponent,
    TopicComponent,
    NotFoundComponent,
    MenuComponent,
    ItemComponent,
    SelectLevelComponent,
    ModalComponent,
    FilterPipe,
    FilterComponent,
    ResourcesComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule,
    AppRoutingModule,
    MatSelectModule,
    HttpModule,
    MatDialogModule,
    MatSnackBarModule,
    CommonModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [ModalComponent],
  providers: [
    UserService,
    SubjectService, 
    TopicService, 
    ResourceService,
    LoaderService,
    UserGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
