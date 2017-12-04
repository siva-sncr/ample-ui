import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Config } from './provider/config.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private localeCode: string;
  
    constructor(private router:Router, private _config:Config) { }
  
    ngOnInit()  {
      this._config.loadConfig().subscribe(
        res => {
          this.localeCode = this._config.getProp('language');
          this._config.loadMessageBundle(this.localeCode).subscribe(
            res => {
              //this.router.navigate(['login']);
              this.router.navigate(['']);
            }, err => {
              console.log(err)
            });
        },
        err => {
           console.log(err)
        }
      );
    }
}
