import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './Employee/employee/employee.component';
import { EmployeeAddComponent } from './Employee/employee-add/employee-add.component';
import { EmployeesListComponent } from './Employee/employees-list/employees-list.component';
import { NotFoundComponent } from './error/not-found/not-found.component';

const routes: Routes = [
  {path:'employee',component: EmployeeComponent},
  {path:'employee-add',component: EmployeeAddComponent},
  {path:'employees', component:EmployeesListComponent},
  {path:'', redirectTo:'/employees', pathMatch:'full'},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
