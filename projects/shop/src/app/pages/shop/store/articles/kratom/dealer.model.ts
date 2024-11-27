export type DealerType = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

export interface Dealer {
  id: string;
  dealerType: DealerType;
  info: string;
}
