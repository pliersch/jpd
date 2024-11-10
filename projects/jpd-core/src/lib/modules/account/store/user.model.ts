import { Role } from './role';
import { Status } from './status';

export interface User {
  id: string,
  givenName: string,
  surName: string,
  email: string,
  role: Role,
  status: Status;
  created: Date;
  lastLogin: Date;
}

export interface CreateUserDto {
  givenName: string,
  surName: string,
  email: string,
  role: Role,
  status: Status;
}
