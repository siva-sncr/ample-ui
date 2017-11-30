import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';

import { AmpleComponent } from './ample.component';
import { AmpleRouteModule } from './ample.route';
import { LoginModule } from './modules/login/login.module';

import { Config } from './provider/config.provider';

@NgModule({
  declarations: [
    AmpleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot(),
    
    AmpleRouteModule,
    LoginModule
  ],
  providers: [Config],
  bootstrap: [AmpleComponent]
})

export class AmpleModule { }