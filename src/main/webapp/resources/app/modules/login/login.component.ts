import { Component, OnInit } from '@angular/core';
import { LoginService } from './service/login.service';

import { Config } from '../../provider/config.provider';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	
	admin: object;
	loginURL: any;

	constructor(private config:Config, private loginService:LoginService) { 
		this.admin = {
			username : "",
			password : ""
		}
		this.loginURL = config.getURL('login', 'checkSession', [], true);		
		
	}

	ngOnInit() {
	}
	
	checkLogin(admin) {
		console.log(" admin  ",admin);
	}
}
