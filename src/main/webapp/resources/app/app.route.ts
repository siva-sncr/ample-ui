import { RouterModule, Routes, Router, NavigationEnd } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { UtilityService } from './services/utility.service' 

const routes : Routes = [];

@NgModule ({
    imports : [
        RouterModule.forRoot(routes)
    ],
    exports : [RouterModule],
    providers : [UtilityService]
})

export class AppRouteModule {
    
}