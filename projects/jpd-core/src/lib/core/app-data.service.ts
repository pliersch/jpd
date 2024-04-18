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
   * @param url '/' is root. other examples are '/contact' '/impressum'
   * @param a4wFragment name of fragment provides by fragment-directive
   */
  getComponentData(className: string, url: string, a4wFragment?: string): any {
    url = this.normalizeUrl(url);
    const components =
      this.appConfig.componentsByUrl.find(item => item.url === url);
    let componentData
    if (a4wFragment) {
      componentData = components?.data.filter(data => data.name === className && data.fragment === a4wFragment);
    } else {
      componentData = components?.data.filter(data => data.name === className);
    }

    if (!componentData) {
      throw new Error('no data found for: ' + className);
    }

    if (componentData.length == 1) {
      return componentData[0].data;
    }

    return componentData.find(data => data.fragment === a4wFragment);
  }

  /**
   * @param url
   * @return string example:
   * @example in: '/service/foo/bar' return: 'service'
   * @example in: '/foo/#bar' return: 'foo'
   * @example in: '/' return: ''
   */
  private normalizeUrl(url: string): string {
    const normalized = url.split('/')[1];
    // // remove fragment. like: foo/bar/#blog → foo/bar
    if (normalized.lastIndexOf('#') != -1) {
      return normalized.substring(0, normalized.lastIndexOf('#'))
    }
    return normalized;

  }

}

