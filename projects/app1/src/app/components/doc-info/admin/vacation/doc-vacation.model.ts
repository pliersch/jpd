export interface Vacation {
  id: number;
  begin: Date;
  end: Date;
}

export interface CreateVacationDto {
  begin: Date;
  end: Date;
}

export interface UpdateVacationDto {
  id: number;
  begin?: Date;
  end?: Date;
}

export interface DeleteVacationDto {
  id: number;
}
