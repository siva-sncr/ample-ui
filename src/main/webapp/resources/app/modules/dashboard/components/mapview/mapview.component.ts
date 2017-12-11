import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../../../services/utility.service';

@Component({
	selector: 'mapview',
	templateUrl: './mapview.component.html',
	styleUrls: ['./mapview.component.scss']
})
export class MapviewComponent {
	constructor(private utilityService : UtilityService) {
		
	}	
}
