import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

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
  displayedColumns: string[] = ['id', 'employee_name', 'employee_salary', 'employee_age'];

  ngOnInit(){
    this.employeeService.getEmployee().subscribe(employees => {
      this.employeeList = employees;
      console.log(employees);
    });
  }
}
