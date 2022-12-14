import { Component, OnInit } from '@angular/core';
import { Employee } from '../MODELS/employee';
import { EmployeeService } from '../SERVICES/employee.service';
import { AllowedProcuduresToPerformService } from '../SERVICES/allowed-procudures-to-perform.service';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
public employees!:Employee[];
public isShowingEmployeeForm=false;
public allowedServices!:AllowedProcuduresToPerformService[];
public isShowingEditForm = false;
public employee!:Employee;
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.getActiveEmployees();
  }
  public getActiveEmployees(): void {
    this.employeeService.getActiveEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public showEmployeeForm():void{
    this.isShowingEditForm=false;
    this.isShowingEmployeeForm=!this.isShowingEmployeeForm;
  

      }
      public   onUpdateEmployee(editEmployee :NgForm, employeeId:number):void{
        this.employee = editEmployee.value;
        this.employee.id=employeeId;
        console.log(this.employee);
        this.employeeService.updateEmployee(this.employee).subscribe(
            (response : Employee )=>{
              console.log("EMPLOYEE EDITED")
              this.isShowingEditForm=!this.isShowingEditForm;
                
                window.location.reload();
            },
            (error :HttpErrorResponse)=>{
              console.log(error.message)
            }

        )
        
      }

      public showEditFormActivator():void{
        this.isShowingEmployeeForm = false;
        this.isShowingEditForm=!this.isShowingEditForm;
      }

      public removeEmployee(employeeToBeRemoved:Employee):void{
  
        this.employeeService.removeEmployee(employeeToBeRemoved).subscribe();
        console.log(employeeToBeRemoved,"EMPLOYEE REMOVED");
        
        window.location.reload();
      }
     

 


}
