import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee-operations/employee.service';
import { Employee } from '../Employee';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})

export class EmployeeAddComponent {
  employee : Employee = {
    id: '',
    employee_name: '',
    employee_salary: '',
    employee_age: 0
  }

  constructor(private emplpoyeeService: EmployeeService){

  }

  AddEmployee(employeeForm:NgForm){
    this.emplpoyeeService.addEmployee(this.employee).subscribe();
    employeeForm.reset();
  }
}
