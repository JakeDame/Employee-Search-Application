import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { EmployeeService } from '../services/employee.service'
import { FormGroup } from '@angular/forms';
import { Employee } from '../models/employee';
import * as moment from 'moment';



@Component({
  selector: 'app-employee-results',
  templateUrl: './employee-results.component.html',
  styleUrls: ['./employee-results.component.css']
})
export class EmployeeResultsComponent implements OnInit {
  employees: Employee[] = [];
  displayedColumns: string[] = ['firstName', 'lastName', 'jobTitle', 'age', 'startDate', 'endDate'];
  dataSource = new MatTableDataSource(this.employees);

  @Input() public searchParams: FormGroup;


  constructor(private employeeService: EmployeeService) { } 

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees;
      this.dataSource.data = this.employees;
    });
    this.dataSource.filterPredicate = (data: Employee, filter: string) => {
      const criteria: SearchCriteria = JSON.parse(filter);
      let match = false;
      if (criteria.firstName && data.firstName.toLowerCase().includes(criteria.firstName.toLowerCase())) {
        match = true;
      }
      if (criteria.lastName && data.lastName.toLowerCase().includes(criteria.lastName.toLowerCase())) {
        match = true;
      }
      if ((criteria.startDate && data.endDate.isSameOrAfter(criteria.startDate)) &&
        (criteria.endDate && data.startDate.isSameOrBefore(criteria.endDate)) ) {
        match = true;
      }
      return match;
    };
    this.searchParams.valueChanges.subscribe(value => {
      this.dataSource.filter = JSON.stringify(value);
    })
  }

}

  interface SearchCriteria {
    firstName: string;
    lastName: string;
    startDate: Date;
    endDate: Date;
  };
