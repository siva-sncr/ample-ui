import { NgModule }  from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { DashboardRouteModule } from './dashboard.route';
import { DashboardComponent } from './dashboard.component';

import { HomeComponent } from './components/home/home.component';

import { MapviewComponent } from './components/mapview/mapview.component';

@NgModule ({
    declarations: [
        DashboardComponent,
        HomeComponent,
        MapviewComponent

    ],
    imports: [
        SharedModule,
        DashboardRouteModule
    ],
})

export class DashboardModule { }