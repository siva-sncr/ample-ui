import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';
import {DataTableModule} from "angular2-datatable";
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';


import { AppComponent } from './app.component';
import { AppRouteModule } from './app.route';
import { DevicesModule } from './modules/devices/devices.module';
import { Config } from './provider/config.provider';
import { ExtendedService } from './services/extended.service';

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
    AppRouteModule,
    DevicesModule
  ],
  providers: [Config, ExtendedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
