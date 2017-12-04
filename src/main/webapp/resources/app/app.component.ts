import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Config } from './provider/config.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private localeCode: string;
  
    constructor(private router:Router, private _config:Config, private activeRoute:ActivatedRoute) { }
  
    ngOnInit()  {
      this._config.loadConfig().subscribe(
        res => {
          this.localeCode = this._config.getProp('language');
          this._config.loadMessageBundle(this.localeCode).subscribe(
            res => {
//              this.router.navigate(['login']);
              this.router.navigate(['']);
/*                var url = window.location.href;
                console.log(" activeRoute  ",this.activeRoute);
                console.log(this.router.url);
                var u = null;

                if(url.indexOf("#") != -1){
                  u = url.split("#");
                  u = u.length > 1 ? "/"+ decodeURIComponent(u[1]) : null;
                }

                console.log("Application intialized...");
                var stateName = "login";
                var states = $state.get();

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

                if((u == "/login" && $location.search().failed) || u == "/login/failed"){
                  stateName = "failed";
                  $scope.baseLoader = false;
                  $rootScope.currentUser = true;
                  $state.go(stateName);
                  return;
                }

                if((u == "/login" && $location.search().disabled) || u == "/login/disabled"){
                  stateName = "disabled";
                  $scope.baseLoader = false;
                  $rootScope.currentUser = true;
                  $state.go(stateName);
                  return;
                }
                stateName = $this.getStateName(u);
                var params = $this.getURLParams(u);
                loginFactory.checkSession()
                  .then(
                  function(data){
                    // global states checkup
                    if ((stateName == 'resetPassword') || (stateName == 'forgotPassword')) {
                      $scope.baseLoader = false;
                      $state.go(stateName, params);
                    } else {
                      params =  {node: params['node']};
                      data = data  ? data : [];
                      for(var i=0;i<data.length;i++){
                        if(data[i].type == "ROOTNODE"){
                          $rootScope.orgId = data[i].id;
                          $rootScope.orgName = data[i].name;
                          break;
                        }
                      }
                      $scope.auditTrailLogin(stateName,params, data, function(events) {
                        // get role and permissions of the user and then redirect to state
                        $scope.getRolesAndPermissions(stateName,params);
                      });
                    }
                  }, 
                  function(error) {
                    // global states checkup
                    if ((stateName == 'resetPassword') || (stateName == 'forgotPassword')) {
                      $scope.baseLoader = false;
                      $state.go(stateName, params);
                    } else {
                      $rootScope.currentUser = false;
                      setTimeout(function(){ 
                        $scope.baseLoader = false;
                        $state.go("login");
                      }, 500);
                    }
                  }
                  ); */

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
