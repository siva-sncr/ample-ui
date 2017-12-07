import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { LineMonitoringComponent } from './line-monitoring.component';

import { EventsComponent } from './components/events/events.component';
import { DisturbancesComponent } from './components/disturbances/disturbances.component';
import { WaveformsComponent } from './components/waveforms/waveforms.component';
import { LogiComponent } from './components/logi/logi.component';

@NgModule ({
    imports : [RouterModule.forChild([
        {
            path : 'line-monitoring',
            component : LineMonitoringComponent,
            children :[
                {
                    path : 'waveforms',
                    component : WaveformsComponent
                },
                {
                    path : 'fault-events',
                    component : EventsComponent
                },
                {
                    path : 'disturbances',
                    component : DisturbancesComponent
                },{
                    path : 'logi',
                    component : LogiComponent
                }
            ]
        },
        
    ])],
    exports : [RouterModule]
})

export class LineMonitoringRouteModule {}