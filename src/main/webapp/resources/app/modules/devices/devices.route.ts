import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { DevicesComponent } from './devices.component';

@NgModule ({
    imports : [RouterModule.forChild([
        {
            path : 'devices',
            component : DevicesComponent
        }
    ])],
    exports : [RouterModule]
})

export class DevicesRouteModule {}