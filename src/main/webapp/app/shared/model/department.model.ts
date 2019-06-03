import { ILocation } from 'app/shared/model/location.model';
import { IEmployee } from 'app/shared/model/employee.model';

export interface IDepartment {
  id?: string;
  departmentName?: string;
  location?: ILocation;
  location_streetAddress?: string;
  employees?: IEmployee[];
}

export const defaultValue: Readonly<IDepartment> = {};
