import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { UtilityService } from '../../services/utility.service';

@Component({
	selector: 'line-monitoring',
	templateUrl: './line.monitoring.component.html',
	styleUrls: ['./line.monitoring.component.scss'],
	//providers: [UtilityService]
})
export class LineMonitoringComponent implements OnInit {
	

	constructor(private utilityService : UtilityService, private router: Router){
		this.utilityService.setMenu("lineMonitoring");
	}
	
	ngOnInit(){
		this.router.navigate(['line-monitoring/fault-events'], {});
	}
	

}
