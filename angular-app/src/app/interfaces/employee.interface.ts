import { JobTitle } from '../enums/job-title.enum';

export interface Employee {
  name: string;
  jobTitle: JobTitle;
  age: number;
  key?: string;
}
