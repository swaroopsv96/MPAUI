import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee-operations/employee.service';
import { Employee } from '../Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  detailsavailable: boolean = true;
  employee_id!: number;
  employee : Employee = {
    id:'',
    employee_name: '',
    employee_salary: '',
    employee_age: 0
  }

  constructor(private emplpoyeeService:EmployeeService){}

  getDetails():void{
    this.emplpoyeeService.getEmployeeById(this.employee_id).subscribe(employee => {
      this.employee = employee;
      console.log(employee);
    });
  }
}
