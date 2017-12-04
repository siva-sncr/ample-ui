import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	
	admin: object;

	constructor() { 
		this.admin = {
			username : "",
			password : ""
		}
	}

	ngOnInit() {
	}
	
	checkLogin(admin) {
		console.log(" admin  ",admin);
	}
}
