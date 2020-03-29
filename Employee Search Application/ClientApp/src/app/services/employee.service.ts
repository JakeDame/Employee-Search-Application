import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = "http://localhost/44341/api";

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get(`${this.url}/employees`);
  }

}
