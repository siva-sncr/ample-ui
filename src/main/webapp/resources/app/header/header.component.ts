import { Component, OnInit } from '@angular/core';
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	
	menuItems = [
		{
			'key': 'nav.main.dashboard',
			'path': '/dashboard',
			'state': 'base.dashboard'
		},
		{
			'key': 'nav.main.linemonitoring',
			'path': '/line-monitoring',
			'state': 'base.lineMonitoring'
		},
		{
			'key': 'nav.main.devicemanagement',
			'path': '/devices',
			'state': 'base.deviceManagement'
		},
		{
			'key': 'nav.main.reports',
			'path': '/reports',
			'state': 'base.ampleReports'
		}
	]
}
