import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentList: any;
  constructor(private studentsService: StudentService) { }

  /**
  * Firt API invoke once first page load.
  */
  ngOnInit() {
    this.getStudentData();
  }


  getStudentData() {
    this.studentList = this.studentsService.getStudents();
    console.log("this.studentList",this.studentList);
  }

  /**
  * Delete student API.
  */
  deleteStudent(index) {
    this.studentList = this.studentsService.deleteStudent(index);
  }
}
