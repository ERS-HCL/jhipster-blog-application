import { IUser } from './user.model';

export interface IBlog {
  id?: number;
  name?: string;
  handle?: string;
  user?: IUser;
}

export const defaultValue: Readonly<IBlog> = {};
