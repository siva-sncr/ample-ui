import { NgModule }  from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login.component';
import { LoginRouteModule } from './login.route';

@NgModule ({
    declarations: [
        LoginComponent
    ],
    imports: [
        LoginRouteModule,
        SharedModule
    ],
})

export class LoginModule { }