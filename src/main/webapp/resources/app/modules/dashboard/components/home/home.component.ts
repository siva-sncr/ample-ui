import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../../../services/utility.service';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent {
	constructor(private utilityService : UtilityService) {
		
	}	
}
