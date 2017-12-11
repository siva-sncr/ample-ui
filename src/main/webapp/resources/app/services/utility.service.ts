import { Injectable, EventEmitter, } from '@angular/core';


@Injectable()
export class UtilityService {
    menuVisible = "dashboard";

    getMenu(){
        return this.menuVisible;
    }
    setMenu(menu){
        this.menuVisible = menu;
    }
}