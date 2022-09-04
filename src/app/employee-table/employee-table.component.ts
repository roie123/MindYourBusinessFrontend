import { Component, OnInit } from '@angular/core';
import { Employee } from '../MODELS/employee';
import { EmployeeService } from '../SERVICES/employee.service';
import { AllowedProcuduresToPerformService } from '../SERVICES/allowed-procudures-to-perform.service';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
public employees!:Employee[];
public allowedServices!:AllowedProcuduresToPerformService[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public breakeArray(employee:Employee): AllowedProcuduresToPerformService[]{
    this.allowedServices=employee.allowedProceduresToPerform;
    return this.allowedServices;
  }

}
