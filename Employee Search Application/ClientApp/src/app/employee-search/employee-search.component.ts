import { Component, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent {

  constructor() { }

  searchEmployeeForm = new FormGroup({
    firstName: new FormControl('', [
    ]),
    lastName: new FormControl('', [
    ]),
    startDate: new FormControl('', [
    ]),
    endDate: new FormControl('', [
    ]),
  });

}
