import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Config } from './provider/config.provider';
import { LoginService } from './modules/login/service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private localeCode: string;
  private isTreeCollapsed: boolean;
  
    constructor(private router:Router, private _config:Config, private loginService:LoginService) { 
      this.isTreeCollapsed = true;
    }

    ngOnInit()  {
        
      this._config.loadConfig().subscribe(
        res => {
          this.localeCode = this._config.getProp('language');
          this._config.loadMessageBundle(this.localeCode).subscribe(
            res => {
              let url = this.router.url;
              console.log(this.router.url);
              let u = null;

              if(url.indexOf("#") != -1){
                u = url.split("#");
                u = u.length > 1 ? "/"+ decodeURIComponent(u[1]) : null;
              }
              console.log("Application intialized...");
              var stateName = "login";

              if (!String.prototype.endsWith) {
                String.prototype.endsWith = function(searchString, position) {
                  var subjectString = this.toString();
                  if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
                    position = subjectString.length;
                  }
                  position -= searchString.length;
                  var lastIndex = subjectString.lastIndexOf(searchString, position);
                  return lastIndex !== -1 && lastIndex === position;
                };
              }
              if((u == "/login") || u == "/login/failed"){
                stateName = "failed";
                this.router.navigate([stateName]);                  
                return;
              }
              if((u == "/login") || u == "/login/disabled"){
                stateName = "disabled";
                this.router.navigate([stateName]);                  
                return;
              }
              this.loginService.checkSession().subscribe(
                res => {
                  console.log(res);
                  // global states checkup
                  if ((stateName == 'resetPassword') || (stateName == 'forgotPassword')) {
                    //$state.go(stateName, params);
                    this.router.navigate([stateName]);                                        
                  } else {
                  }
                }, err => {
//                  console.log(err);
                  // global states checkup
                  if ((stateName == 'resetPassword') || (stateName == 'forgotPassword')) {
//                    $state.go(stateName, params);
                    this.router.navigate([stateName]);
                  } else {
                    this.router.navigate(['login']);
                  }
                }
              );
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
