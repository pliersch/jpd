import { Injectable } from '@angular/core';
import { AppConfig } from '../content';

@Injectable({
  providedIn: 'root'
})
export abstract class AppDataService {

  protected appConfig: AppConfig;

  protected constructor(appConfig: AppConfig) {
    if (!appConfig) {
      throw new Error('appConfig is required');
    }
    this.appConfig = appConfig;
  }

  /**
   * @param className class of the component like: 'MyComponent'
   * @param a4wFragment name of fragment provides by fragment-directive
   */
  getComponentData(className: string, a4wFragment?: string): any {
    // console.log('AppDataService getComponentData: ', className, a4wFragment)
    const components = this.appConfig.data;
    let componentData;
    if (a4wFragment) {
      componentData = components.filter(data =>
        data.name === className
        && data.fragment === a4wFragment);
    } else {
      componentData = components.filter(data => data.name === className);
    }

    if (!componentData) {
      throw new Error('no data found for: ' + className);
    }

    if (componentData.length > 1) {
      console.log('AppDataService getComponentData more then one: ', componentData)
      throw new Error('more then one data found for: ' + className);
    }

    return componentData[0].data;
  }

}

