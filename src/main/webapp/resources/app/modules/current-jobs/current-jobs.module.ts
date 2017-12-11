import { NgModule }  from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CurrentJobsRouteModule } from './current-jobs.route';
import { CurrentJobsComponent } from './current-jobs.component';

import { DeviceConfigurationComponent } from './components/device-configuration/device-configuration.component';

import { FirmwareUpgradeComponent } from './components/firmware-upgrade/firmware-upgrade.component';

@NgModule ({
    declarations: [
        CurrentJobsComponent,
        DeviceConfigurationComponent,
        FirmwareUpgradeComponent

    ],
    imports: [
        SharedModule,
        CurrentJobsRouteModule
    ],
})

export class CurrentJobsModule { }