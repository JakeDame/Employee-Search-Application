import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private url = 'https://localhost:44341/api';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<any[]>(`${this.url}/employees`).pipe(
      map((employees) => {
        const returnVal: Employee[] = [];
        employees.forEach((e) => {
          returnVal.push({
            firstName: e.firstName,
            lastName: e.lastName,
            jobTitle: e.jobTitle,
            age: moment(e.age),
            startDate: moment(e.startDate),
            endDate: moment(e.endDate),
          });
        });
        return returnVal;
      })
    );
  }

  addEmployee(employee: Employee) {
    return this.http.post<Employee>(`${this.url}/employees`, employee);
  }
}
