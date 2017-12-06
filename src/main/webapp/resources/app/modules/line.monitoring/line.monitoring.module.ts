import { NgModule }  from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LineMonitoringComponent } from './line.monitoring.component';
import { LineMonitoringRouteModule } from './line.monitoring.route';
import { UtilityService } from '../../services/utility.service';

// Sub Components

import { EventsComponent } from './components/events/events.component';
import { DisturbancesComponent } from './components/disturbances/disturbances.component';
import { WaveformsComponent } from './components/waveforms/waveforms.component';
import { LogiComponent } from './components/logi/logi.component';

@NgModule ({
    declarations: [
        LineMonitoringComponent,
        EventsComponent,
        DisturbancesComponent,
        LogiComponent,
        WaveformsComponent
    ],
    imports: [
        LineMonitoringRouteModule,
        SharedModule
    ],
    providers : [UtilityService]
})

export class LineMonitoringModule { }