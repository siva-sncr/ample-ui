import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';
import {DataTableModule} from "angular2-datatable";
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRouteModule } from './app.route';
import { LoginModule } from './modules/login/login.module';
import { DevicesModule } from './modules/devices/devices.module';
import { Config } from './provider/config.provider';
import { ExtendedService } from './services/extended.service';
import { LoginService } from './modules/login/service/login.service';

// Additional Packages
import { TreeModule } from 'angular-tree-component';

// Additional Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TreeviewComponent } from './treeview/treeview.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TreeviewComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    TreeModule,
    HttpModule,
    TranslateModule.forRoot(),
    DataTableModule,
    AngularMultiSelectModule,
    FormsModule,
    
    AppRouteModule,
    LoginModule,
    DevicesModule
  ],
  providers: [Config, ExtendedService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
