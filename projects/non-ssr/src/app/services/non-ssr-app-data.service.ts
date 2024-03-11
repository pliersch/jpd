import { Injectable } from '@angular/core';
import { AppDataService } from 'jpd-core';
import { appData } from "../app.data";

@Injectable({
  providedIn: 'root'
})
export class NonSsrAppDataService extends AppDataService {

  constructor() {
    console.log('NonSsrAppDataService constructor fuck!: ',)
    super(appData);
  }

}
