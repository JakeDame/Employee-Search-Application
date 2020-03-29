import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { EmployeeService } from '../services/employee.service'


@Component({
  selector: 'app-employee-results',
  templateUrl: './employee-results.component.html',
  styleUrls: ['./employee-results.component.css']
})
export class EmployeeResultsComponent implements OnInit {
  employees: any = []; 
  displayedColumns: string[] = ['firstName', 'lastName', 'jobTitle', 'age', 'startDate', 'endDate'];
  dataSource = new MatTableDataSource(this.employees);
  
  constructor(private employeeService: EmployeeService) { } 

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees;
      this.dataSource.data = this.employees;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
