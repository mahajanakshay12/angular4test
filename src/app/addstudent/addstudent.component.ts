import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { ValidationService } from '../config.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

/**
   * Student form group initialization
   */
  studentForm: FormGroup;

  /**
  * Student data initialization with emty records
  */
  data = { 'firstname': '', 'lastname': '', 'email': '', 'phone': '' };

  index: any;

  public indexy = false;

  /**
   * Student data coonstructer invoke  
   */
  constructor(private studentsService: StudentService
    , private router: Router, private route: ActivatedRoute,
    private fb: FormBuilder) {
    this.route.params.subscribe(params => {
      this.index = params['id'];
      this.indexy = true;
      if (this.index && this.index != null && this.index != undefined) {
        this.data = this.studentsService.getStudent(this.index);
        this.studentForm = this.fb.group({
          firstname: [this.data.firstname, Validators.required],
          lastname: [this.data.lastname, Validators.required],
          phone: [this.data.phone, [Validators.required,ValidationService.checkLimit(1000000000,9999999999)]],
          email: [this.data.email, [Validators.required, Validators.email]]
        });
      } else {
        this.indexy = false;
        this.studentForm = this.fb.group({
          firstname: ['', Validators.required],
          phone: ['', [Validators.required,ValidationService.checkLimit(1000000000,9999999999)]],
          email: ['', [Validators.required, Validators.email]],
          lastname: ['', Validators.required]
        });
      }
    });
  }

  ngOnInit() {
  }
  
  
  /**
   * Add student function invoke   
   */
  addStudent() {
    let data = this.studentForm.value;
    if (this.index != undefined || this.index != null) {
      data.id = parseInt(this.index);
    }
    let addStudent = this.studentsService.addStudent(data);
    this.router.navigateByUrl('');
    
  }

}
