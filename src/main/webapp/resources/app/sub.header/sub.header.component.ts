import { Component, OnInit, Input, Output } from '@angular/core';

import { UtilityService } from '../services/utility.service'

import { Config } from '../provider/config.provider'


import { RouterModule, Routes, Router, NavigationEnd } from '@angular/router';

@Component({
	selector: 'app-sub-header',
	templateUrl: './sub.header.component.html',
	styleUrls: ['./sub.header.component.scss'],
	//providers: [UtilityService]
})
export class SubHeaderComponent implements OnInit{
	
	menuItems;
	menuList = {
		"dashboard" : [
			{
				'key': 'dashboard.nav.sentient',
				'path': 'dashboard/home',
				'state': 'base.dashboard.sentient'
		   },
		   {
				'key': 'dashboard.nav.map',
				'path': 'dashboard/mapview',
				'state': 'base.dashboard.map'
		   }
		],
		"lineMonitoring" : [
			{
				'key': 'linemonitoring.nav.faultevents',
				'path': 'line-monitoring/fault-events',
				'state': 'base.lineMonitoring.faultEvents'
			},
			{
			 	'key': 'linemonitoring.nav.disturbances',
			 	'path': 'line-monitoring//disturbances',
			 	'state': 'base.lineMonitoring.disturbances'
			},
			{
				'key': 'linemonitoring.nav.waveforms',
				'path': 'line-monitoring//waveforms',
				'state': 'base.lineMonitoring.waveforms'
			},
			{
				'key': 'linemonitoring.nav.logi',
				'path': 'line-monitoring//logi',
				'state': 'base.lineMonitoring.logi'
			}
		],
		"reports" : [
			{
				'key': 'reports.nav.offlinedevices',
				'path': 'reports/inactivedevices',
				'state': 'base.ampleReports.offlinedevices'
			  },{
				'key': 'reports.nav.autophaseid',
				'path': 'reports/phase-id',
				'state': 'base.ampleReports.autophaseid'
			  },
			  {
				'key': 'reports.nav.dnp3Points',
				'path': 'reports/dnp3',
				'state': 'base.ampleReports.dnp3points'
			  }
		]
	}

	subscription: any;
	navAlignClass;
	constructor(private utilityService : UtilityService, private router: Router) {
	
        router.events.subscribe((val) => {
            if(val instanceof NavigationEnd){
				let modules = this.utilityService.getMenu();
				this.navAlignClass = modules + "-subnav";
				let isMenu = this.menuList[modules];
				this.menuItems = isMenu;
		    } 
        });
      }

	ngOnInit(){
		
		
	}
	
}
