import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Component, Input } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { EmployeeService } from '../services/employee.service'
import { AddEmployeeComponent } from './add-employee.component';
import { HttpClientModule } from '@angular/common/http';

@Component({ selector: 'app-employee-results', template: '' })
class EmployeeResultsStubComponent {
  @Input() public searchParams: FormGroup;
}

describe('AddEmployeeComponent', () => {
  let component: AddEmployeeComponent;
  let fixture: ComponentFixture<AddEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddEmployeeComponent, EmployeeResultsStubComponent],
      imports: [FormsModule, ReactiveFormsModule, MatInputModule, BrowserAnimationsModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
