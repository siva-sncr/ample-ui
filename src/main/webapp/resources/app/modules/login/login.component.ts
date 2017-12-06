import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { Config } from '../../provider/config.provider';
import { LoginService } from './service/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	
	loginform: FormGroup;
	loginURL: any;

	constructor(private config:Config, private loginService:LoginService, private fb: FormBuilder) { 
		this.loginform = fb.group({
			'username' : [null, [ Validators.required ]],
			'password' : [null,[ Validators.required ]]
		  });
		  
		this.loginURL = config.getURL('login', 'checkSession', [], true);
		console.log("this.loginURL ",this.loginURL);
	}

	ngOnInit() {
	}
	
	checkLogin(value) {
		console.log(" this.loginform  ", value);
		this.loginService.login(value)
		.subscribe(
			res => {
			  console.log(res);
			}
		);
	}
}
