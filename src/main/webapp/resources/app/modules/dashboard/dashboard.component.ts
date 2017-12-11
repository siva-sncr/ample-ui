import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '../../services/utility.service';

@Component({
	selector: 'dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	constructor(private utilityService : UtilityService, private router: Router) {
		this.utilityService.setMenu("dashboard");
	}	

	ngOnInit(){
		this.router.navigate(['dashboard/home'], {});
	}
}
