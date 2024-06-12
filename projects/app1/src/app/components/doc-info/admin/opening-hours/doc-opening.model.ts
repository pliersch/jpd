export type Day = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday';

export interface DailyOpeningHours {
  id: string;
  day: Day;
  morningBegin: string;
  morningEnd: string;
  afterNoonBegin: string;
  afterNoonEnd: string;
  comment: string;
}

// export interface CreateDocWidgetItem {
//   topic: Topic;
//   message: string;
//   svg: string;
//   visibility: Visibility;
// }
//
// export interface UpdateDocWidgetItem {
//   // topic: Topic;
//   // message: string;
//   // svg?: string;
//   visibility?: Visibility;
// }
//
export interface CreateDailyOpeningHoursDto {
  day: Day;
  morningBegin: string;
  morningEnd: string;
  afterNoonBegin: string;
  afterNoonEnd: string;
  comment: string;
}

//
// export interface UpdateDocWidgetItemDto {
//   topic?: number;
//   message?: string;
//   svg?: string;
//   visibility?: number;
// }
