import { Injectable } from '@angular/core';
import { ExtendedService } from '../../../services/extended.service';

@Injectable()
export class LoginService {
  
  constructor(private extendedService:ExtendedService) { }

  checkSession() {
    var url = this.extendedService.getURL('login', 'customerInfo', {}, "");
    return this.extendedService.requestGET(url);
  }

}