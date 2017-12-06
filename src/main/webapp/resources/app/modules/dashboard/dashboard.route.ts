import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';

import { HomeComponent } from './components/home/home.component';
import { MapviewComponent } from './components/mapview/mapview.component';

@NgModule ({
    imports : [RouterModule.forChild([
        {
            path : 'dashboard',
            component : DashboardComponent,
            children :[
                {
                    path : 'home',
                    component : HomeComponent
                },
                {
                    path : 'mapview',
                    component : MapviewComponent
                }
            ]
        }
    ])],
    exports : [RouterModule]
})

export class DashboardRouteModule {}