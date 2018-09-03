import { Moment } from 'moment';
import { IJobMySuffix } from 'app/shared/model//job-my-suffix.model';

export interface IEmployeeMySuffix {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  hireDate?: Moment;
  salary?: number;
  commissionPct?: number;
  departmentId?: number;
  jobs?: IJobMySuffix[];
  managerId?: number;
}

export const defaultValue: Readonly<IEmployeeMySuffix> = {};
