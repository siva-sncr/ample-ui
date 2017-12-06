import { NgModule }  from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginRouteModule } from './login.route';

@NgModule ({
    declarations: [
        LoginComponent
    ],
    imports: [
        LoginRouteModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
})

export class LoginModule { }