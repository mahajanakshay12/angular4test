import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';
import { StudentComponent } from '../student/student.component';
import { AddstudentComponent } from '../addstudent/addstudent.component';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
 doLogout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}


export const homeChildRoutes : Routes = [
{
  path: '',
  component: StudentComponent
},
{ 
	path: 'add', 
	component: AddstudentComponent},
{ 
	path: 'add/:id', 
	component: AddstudentComponent}

];