import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'src/app/Employee/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getEmployee(){
    return this.http.get<Employee[]>('/api/employees/sort_by_salary');
  }
  
  getEmployeeId(){
    return this.http.get<Employee>('');
  }

  addEmployee(employee: Employee){
    return this.http.post<Employee>('/api/employees',employee);
  }
}
