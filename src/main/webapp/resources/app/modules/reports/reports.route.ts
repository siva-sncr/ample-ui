import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ReportsComponent } from './reports.component';

import { InactivedevicesComponent } from './components/inactive-devices/inactive-devices.component';
import { Dnp3Component } from './components/dnp3/dnp3.component';
import { PhaseidComponent } from './components/phaseid/phaseid.component';

@NgModule ({
    imports : [RouterModule.forChild([
        {
            path : 'reports',
            component : ReportsComponent,
            children :[
                {
                    path : 'inactivedevices',
                    component : InactivedevicesComponent
                },
                {
                    path : 'dnp3',
                    component : Dnp3Component
                },
                {
                    path : 'phase-id',
                    component : PhaseidComponent
                }
            ]
        }
    ])],
    exports : [RouterModule]
})

export class ReportsRouteModule {}