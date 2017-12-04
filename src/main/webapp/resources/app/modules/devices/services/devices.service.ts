import { Injectable } from '@angular/core';
import { ExtendedService } from '../../../services/extended.service';

@Injectable()
export class DevicesService {
  
  constructor(private extendedService:ExtendedService) { }

  getNodeData(params, reqBody) {
    var url = this.extendedService.getURL('deviceManagement', 'data', params, "");
    return this.extendedService.requestPOST(url, reqBody, "simple");
  }

}