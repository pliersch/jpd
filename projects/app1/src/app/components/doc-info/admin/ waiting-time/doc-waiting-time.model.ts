export interface WaitingTime {
  id: string;
  msg: string;
  active: boolean;
}

export interface CreateWaitingTime {
  msg?: string;
  active?: boolean;
}

export interface UpdateWaitingTime {
  msg?: string;
  active?: boolean;
}
