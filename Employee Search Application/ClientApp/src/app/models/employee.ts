import * as moment from 'moment';

export interface Employee {
  firstName: string;
  lastName: string;
  jobTitle: string;
  age: moment.Moment;
  startDate: moment.Moment;
  endDate: moment.Moment;
}
