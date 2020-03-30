import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  employee: Employee[] = [];

  addEmployeeForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    jobTitle: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
  });

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit() {
    if (!this.addEmployeeForm.valid) {
      return;
    }
    this.employeeService
      .addEmployee(this.addEmployeeForm.value)
      .subscribe((value) => {
        this.addEmployeeForm.reset();
        this.router.navigateByUrl('');
      });
  }
}
