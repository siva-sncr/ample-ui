import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CurrentJobsComponent } from './current-jobs.component';

import { DeviceConfigurationComponent } from './components/device-configuration/device-configuration.component';
import { FirmwareUpgradeComponent } from './components/firmware-upgrade/firmware-upgrade.component';

@NgModule ({
    imports : [RouterModule.forChild([
        {
            path : 'current-jobs',
            component : CurrentJobsComponent,
            children :[
                {
                    path : 'device-configuration',
                    component : DeviceConfigurationComponent
                },
                {
                    path : 'firmware-upgrade',
                    component : FirmwareUpgradeComponent
                }
            ]
        }
    ])],
    exports : [RouterModule]
})

export class CurrentJobsRouteModule {}