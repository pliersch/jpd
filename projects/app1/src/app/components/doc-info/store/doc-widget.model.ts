export type Visibility = 'low' | 'high' | 'none';

export type Topic = 'Öffnung' | 'Wartedauer' | 'Warnung' | 'Service' | 'Info' | 'Urlaub';

export interface DocWidgetItem {
  id: string;
  topic: Topic;
  message: string;
  svg: string;
  update: string;
  visibility: Visibility;
}

export interface CreateDocWidgetItem {
  topic: Topic;
  message: string;
  svg: string;
  visibility: Visibility;
}

export interface UpdateDocWidgetItem {
  // topic: Topic;
  // message: string;
  // svg?: string;
  visibility?: Visibility;
}

export interface CreateDocWidgetItemDto {
  topic: number;
  message: string;
  svg: string;
  visibility: number;
}

export interface UpdateDocWidgetItemDto {
  topic?: number;
  message?: string;
  svg?: string;
  visibility?: number;
}

// export function createWidgets(): CreateDocInfoItem[] {
//   return [
//     {
//       topic: 'Öffnung',
//       message: 'Öffnet in 50 Minuten (15:00 Uhr)',
//       visibility: 'high',
//       svg: 'schedule',
//     },
//     {topic: 'Wartedauer', message: 'Lange Wartedauer', visibility: 'high', svg: 'traffic'},
//     {topic: 'Warnung', message: 'Maskenpflicht', visibility: 'low', svg: 'medical_mask'},
//     {topic: 'Service', message: 'Grippe-Impfung möglich', visibility: 'low', svg: 'vaccines'},
//     {topic: 'Info', message: 'demnächst Urlaub', visibility: 'low', svg: 'pan_tool'},
//     {topic: 'Urlaub', message: 'Urlaub', visibility: 'none', svg: 'beach'},
//   ];
// }
