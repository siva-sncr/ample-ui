import { NgModule }  from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ReportsComponent } from './reports.component';
import { ReportsRouteModule } from './reports.route';

import { InactivedevicesComponent } from './components/inactive-devices/inactive-devices.component';
import { Dnp3Component } from './components/dnp3/dnp3.component';
import { PhaseidComponent } from './components/phaseid/phaseid.component';

@NgModule ({
    declarations: [
        ReportsComponent,
        InactivedevicesComponent,
        Dnp3Component,
        PhaseidComponent
    ],
    imports: [
        ReportsRouteModule,
        SharedModule
    ],
})

export class ReportsModule { }