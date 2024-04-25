import { Injectable } from '@angular/core';

export type Priority = 'low' | 'high';

export interface DocInfoItem {
  topic: string;
  message: string;
  svgIcon: string;
  priority: Priority;
  active: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DocInfoModel {

  private infos: DocInfoItem[] = [
    {
      topic: 'Öffnung',
      message: 'Öffnet in 50 Minuten (15:00 Uhr)',
      priority: 'high',
      svgIcon: 'schedule',
      active: false
    },
    {topic: 'Wartedauer', message: 'Lange Wartedauer', priority: 'high', svgIcon: 'traffic', active: false},
    {topic: 'Warnung', message: 'Maskenpflicht', priority: 'low', svgIcon: 'medical_mask', active: false},
    {topic: 'Service', message: 'Grippe-Impfung möglich', priority: 'low', svgIcon: 'vaccines', active: false},
    {topic: 'Info', message: 'demnächst Urlaub', priority: 'low', svgIcon: 'pan_tool', active: false},
  ];

  getInfos(): ReadonlyArray<DocInfoItem> {
    return this.infos;
  }

  getHighInfos(): DocInfoItem[] {
    return this.infos.filter(info => info.priority === 'high');
  }

  getLowInfos(): DocInfoItem[] {
    return this.infos.filter(info => info.priority === 'low');
  }

  setInfos(infos: DocInfoItem[]): void {
    this.infos = infos;
    console.log('DocInfoModel setInfos: ', this.infos)
  }
}
