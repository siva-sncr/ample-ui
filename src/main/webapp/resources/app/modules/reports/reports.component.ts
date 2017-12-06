import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {UtilityService} from '../..//services/utility.service';

@Component({
	selector: 'reports',
	templateUrl: './reports.component.html',
	styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit{
	constructor(private utilityService : UtilityService, private router: Router) {
		this.utilityService.setMenu("reports");
	}

	ngOnInit(){
		this.router.navigate(['reports/inactivedevices'], {});
	}
}
