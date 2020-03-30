import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Component, Input } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Router } from '@angular/router';
import { of } from 'rxjs';

import { EmployeeService } from '../services/employee.service';
import { AddEmployeeComponent } from './add-employee.component';
import { HttpClientModule } from '@angular/common/http';

@Component({ selector: 'app-employee-results', template: '' })
class EmployeeResultsStubComponent {
  @Input() public searchParams: FormGroup;
}

describe('AddEmployeeComponent', () => {
  let component: AddEmployeeComponent;
  let fixture: ComponentFixture<AddEmployeeComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  const employeeSpy = jasmine.createSpyObj('EmployeeService', ['addEmployee']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddEmployeeComponent, EmployeeResultsStubComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule,
      ],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: EmployeeService, useValue: employeeSpy },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#onSubmit', () => {
    it('should call addEmployee from employee services', () => {
      employeeSpy.addEmployee.and.returnValue(of(''));
      component.addEmployeeForm.patchValue({
        firstName: 'A',
        lastName: 'B',
        jobTitle: 'C',
        age: '2019-01-01',
        startDate: '2019-01-01',
        endDate: '2019-01-01',
      });
      component.onSubmit();
      expect(routerSpy.navigateByUrl).toHaveBeenCalled();
    });
    it('should not call addEmployee from employee services if form is invalid', () => {
      employeeSpy.addEmployee.and.returnValue(of(''));
      component.onSubmit();
      expect(routerSpy.navigateByUrl).toHaveBeenCalledTimes(0);
    });
  });
});
