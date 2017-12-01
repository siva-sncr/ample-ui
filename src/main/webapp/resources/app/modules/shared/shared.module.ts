import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [ 
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule,
        TranslateModule
    ],
    declarations: [ ],
    exports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule,
        TranslateModule
    ]
})
export class SharedModule { }