import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { of } from 'rxjs';
import * as moment from 'moment';

import { EmployeeService } from '../services/employee.service'
import { EmployeeResultsComponent } from './employee-results.component';

describe('EmployeeResultsComponent', () => {
  let component: EmployeeResultsComponent;
  let fixture: ComponentFixture<EmployeeResultsComponent>;
  let employeeServiceSpy = jasmine.createSpyObj('EmployService', ['getEmployees']);
  let employee;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeResultsComponent],
      imports: [MatTableModule, FormsModule, ReactiveFormsModule],
      providers: [{ provide: EmployeeService, useValue: employeeServiceSpy }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    employee = {
      employeeId: 1,
      firstName: "John",
      lastName: "Smith",
      jobTitle: "CEO",
      age: moment("1980-7-10"),
      startDate: moment("2005-09-01"),
      endDate: moment("2010-06-15")
    };
    fixture = TestBed.createComponent(EmployeeResultsComponent);
    component = fixture.componentInstance;
    employeeServiceSpy.getEmployees.and.returnValue(of([]));
    component.searchParams  = new FormGroup({
      firstName: new FormControl('', [
      ]),
      lastName: new FormControl('', [
      ]),
      startDate: new FormControl('', [
      ]),
      endDate: new FormControl('', [
      ]),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('should populate employee object', () => {
      employeeServiceSpy.getEmployees.and.returnValue(of([employee]));
      component.ngOnInit();
      expect(component.employees.length).toBe(1);

    });
  });

  describe('tableFilterPredicate', () => {
    it('should filter on the first name', () => {
      const criteria = {
        firstName: "Jo"
      }
      const result = component.dataSource.filterPredicate(employee, JSON.stringify(criteria));
      expect(result).toBeTruthy();
    });
    it('should filter on the last name', () => {
      const criteria = {
        lastName: "Sm"
      }
      const result = component.dataSource.filterPredicate(employee, JSON.stringify(criteria));
      expect(result).toBeTruthy();
    });
    it('should filter employee start date is before criteria dates', () => {
      const criteria = {
        startDate: moment("2004-01-01"),
        endDate: moment("2008-01-01")
      }
      const result = component.dataSource.filterPredicate(employee, JSON.stringify(criteria));
      expect(result).toBeTruthy();
    });
    it('should filter employee start date is before criteria start dates', () => {
      const criteria = {
        startDate: moment("2000-01-01"),
        endDate: moment("2003-01-01")
      }
      const result = component.dataSource.filterPredicate(employee, JSON.stringify(criteria));
      expect(result).toBeFalsy();
    });
    it('should filter employee start date and end date is between criteria dates', () => {
      const criteria = {
        startDate: moment("2007-01-01"),
        endDate: moment("20012-01-01")
      }
      const result = component.dataSource.filterPredicate(employee, JSON.stringify(criteria));
      expect(result).toBeTruthy();
    });
  });

  describe('searchParams.valueChange', () => {
    it('Should change the value', () => {
      let value = component.searchParams
      })
    });
  });

});


//this.searchParams.valueChanges.subscribe(value => {
//this.dataSource.filter = JSON.stringify(value);
