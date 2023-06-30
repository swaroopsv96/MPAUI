import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { Employee } from '../Employee';
import { EmployeeService } from 'src/app/services/employee-operations/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {
  constructor(private employeeService:EmployeeService){}
  employeeList:Employee[] = [];
  displayedColumns: string[] = ['id', 'name', 'salary', 'age'];

  ngOnInit(){
    this.employeeService.getEmployee().subscribe(employees => {
      this.employeeList = employees;
    });
  }
}
