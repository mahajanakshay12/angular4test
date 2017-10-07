import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { homeChildRoutes } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { RegistrationComponent } from './registration/registration.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './auth.service';
import { StudentService } from './student.service';
import { SearchPipe } from './search.pipe';


const routes : Routes = [
{
  path: '',
  component: HomeComponent,
  children:homeChildRoutes,
  canActivate : [AuthService]
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: '**',
  redirectTo: 'login'
}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    StudentComponent,
    AddstudentComponent,
    RegistrationComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService,StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
