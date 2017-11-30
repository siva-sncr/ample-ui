import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AmpleComponent } from './ample.component';

const routes : Routes = [];

@NgModule ({
    imports : [
        RouterModule.forRoot(routes)
    ],
    exports : [RouterModule]
})

export class AmpleRouteModule {}