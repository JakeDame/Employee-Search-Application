import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let httpTestingController: HttpTestingController;
  let employeeService: EmployeeService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    employeeService = TestBed.get(EmployeeService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    const service: EmployeeService = TestBed.get(EmployeeService);
    expect(service).toBeTruthy();
  });

  describe('#getEmployee', () => {
    it('should return an array of employee objects', () => {
      const mockEmployee = [
        {
          employeeId: 1,
          firstName: 'John',
          lastName: 'Smith',
          jobTitle: 'CEO',
          age: new Date('1980-7-10'),
          startDate: new Date('2005-09-01'),
          endDate: new Date('2010-06-15'),
        },
      ];
      employeeService.getEmployees().subscribe((employees) => {
        expect(employees.length).toBe(1);
      });

      const reqUrl = 'https://localhost:44341/api/employees';
      const req = httpTestingController.expectOne(reqUrl);
      expect(req.request.method).toBe('GET');
      req.flush(mockEmployee);
    });
  });
});
