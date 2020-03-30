import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service'
import { Employee } from '../models/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee: Employee[] = [];

  constructor(private employeeService: EmployeeService) { } 

  ngOnInit() {
  }

  addEmployeeForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required
    ]),
    lastName: new FormControl('', [
      Validators.required
    ]),
    jobTitle: new FormControl('', [
      Validators.required
    ]),
    age: new FormControl('', [
      Validators.required
    ]),
    startDate: new FormControl('', [
      Validators.required
    ]),
    endDate: new FormControl('', [
      Validators.required
    ]),
  });

  onSubmit() {
    this.employeeService.addEmployee(this.addEmployeeForm.value);
  }

}
