import { IEntry } from 'app/shared/model//entry.model';

export interface ITag {
  id?: number;
  name?: string;
  entries?: IEntry[];
}

export const defaultValue: Readonly<ITag> = {};
