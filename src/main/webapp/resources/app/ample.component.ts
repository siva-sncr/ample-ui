import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Config } from './provider/config.provider';

@Component({
  selector: 'app-ample',
  templateUrl: './ample.component.html',
  styleUrls: ['./ample.component.scss']
})

export class AmpleComponent implements OnInit{
  
	//Getting dynamic date to show in footer
  private date = new Date();
  
  private localeCode: string;

  constructor(private router:Router, private _config:Config) { }

  ngOnInit()  {
    this._config.loadConfig().subscribe(
      res => {
        this.localeCode = this._config.getProp('language');
        this._config.loadMessageBundle(this.localeCode).subscribe(
          res => {
            this.router.navigate(['login']);
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