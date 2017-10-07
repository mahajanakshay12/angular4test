import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup ,FormControl,Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidationService } from '../config.service';
import { ToastrService } from 'ngx-toastr';
//import { ViewContainerRef } from '@angular/core';
import { Login} from '../data-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  private loginForm : FormGroup;
	constructor(private formBuilder: FormBuilder,private router: Router,private toastr: ToastrService) { 
		this.loginForm = this.formBuilder.group({
			email: ['',  [Validators.required, ValidationService.emailValidator]],
			password: ['',[Validators.required, ValidationService.passwordValidator]]
		});
	}

	ngOnInit() {
//localStorage.clear();
		if(localStorage.getItem('userData'))
			this.router.navigate(['/']);
	}

	doLogin(){
		console.log("data", this.loginForm.value)
		if (this.loginForm.value.email == 'admin@yopmail.com' && this.loginForm.value.password == 'admin@123') {
			localStorage.setItem('userData', JSON.stringify(this.loginForm.value));
			this.router.navigate(['/']);
			this.toastr.success('Login successfully !');
		}

		else{
			this.toastr.error('Wrong username or password !');
		}
	}

}

