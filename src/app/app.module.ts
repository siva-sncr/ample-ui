import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

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
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
