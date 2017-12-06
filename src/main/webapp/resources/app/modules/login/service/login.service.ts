import { Injectable } from '@angular/core';
import { ExtendedService } from '../../../services/extended.service';

@Injectable()
export class LoginService {
  
  constructor(private extendedService:ExtendedService) { }

  checkSession() {
    var url = this.extendedService.getURL('login', 'customerInfo', {}, "");
    return this.extendedService.requestGET(url);
  }

  login(value){
    var url = this.extendedService.getURL('login', 'checkSession', {}, true);
    return this.extendedService.requestPOST(url, {j_username:value.username, j_password:value.password}, "");
  }


}