import { NgModule }  from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DataTableModule } from "angular2-datatable";
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';

import { DevicesComponent } from './devices.component';
import { DevicesRouteModule } from './devices.route';

@NgModule ({
    declarations: [
        DevicesComponent
    ],
    imports: [
        DataTableModule,
        AngularMultiSelectModule,
        DevicesRouteModule,
        SharedModule
    ],
})

export class DevicesModule { }