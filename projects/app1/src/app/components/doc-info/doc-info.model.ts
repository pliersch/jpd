import { Injectable } from '@angular/core';

export type Priority = 'low' | 'high';
// todo german
export type Topic = 'Öffnung' | 'Wartedauer' | 'Warnung' | 'Service' | 'Info' | 'Urlaub';

export interface DocInfoItemModel {
  topic: Topic;
  message: string;
  svgIcon: string;
  priority: Priority;
  active: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DocInfoModel {

  private infos: DocInfoItemModel[] = [
    {
      topic: 'Öffnung',
      message: 'Öffnet in 50 Minuten (15:00 Uhr)',
      priority: 'high',
      svgIcon: 'schedule',
      active: true
    },
    {topic: 'Wartedauer', message: 'Lange Wartedauer', priority: 'high', svgIcon: 'traffic', active: true},
    {topic: 'Warnung', message: 'Maskenpflicht', priority: 'low', svgIcon: 'medical_mask', active: true},
    {topic: 'Service', message: 'Grippe-Impfung möglich', priority: 'low', svgIcon: 'vaccines', active: true},
    {topic: 'Info', message: 'demnächst Urlaub', priority: 'low', svgIcon: 'pan_tool', active: true},
    {topic: 'Urlaub', message: 'Urlaub', priority: 'low', svgIcon: 'beach', active: false},
  ];

  constructor() {
    const infos = localStorage.getItem('doc_infos');
    if (infos) {
      this.infos = JSON.parse(infos);
    }
  }

  getInfos(): DocInfoItemModel[] {
    return this.infos;
  }

  getInfoByTopic(topic: Topic): DocInfoItemModel {
    return this.infos.find(info => info.topic === topic)!;
  }

  getHighInfos(): DocInfoItemModel[] {
    return this.infos.filter(info => info.priority === 'high' && info.active);
  }

  getLowInfos(): DocInfoItemModel[] {
    return this.infos.filter(info => info.priority === 'low' && info.active);
  }

  getAvailableInfos(): DocInfoItemModel[] {
    return this.infos.filter(info => !info.active);
  }

  setInfos(infos: DocInfoItemModel[]): void {
    this.infos = infos;
    localStorage.setItem('doc_infos', JSON.stringify(infos));
  }
}
