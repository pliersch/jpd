import { Injectable } from '@angular/core';
import { AppDataService } from 'jpd-core';
import { appData } from "../app.data";

@Injectable({
  providedIn: 'root'
})
export class CustomAppDataService extends AppDataService {

  constructor() {
    super(appData);
  }

}
