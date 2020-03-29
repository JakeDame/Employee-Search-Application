import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = "https://localhost:44341/api";

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get(`${this.url}/employees`);
  }

  postEmployee() {
    //return this.http.post(`${this.url}/employees`, <INSERT EMPLOYEE OBJECT HERE>);
  }

}
