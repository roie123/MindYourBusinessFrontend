import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/MODELS/employee';
import { EmployeeService } from 'src/app/SERVICES/employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
public employee!:Employee;
public isAbleToSubmit = true;

  constructor(private employeeService:EmployeeService ,public router:Router) { }

  ngOnInit(): void {
  }
  
    
  public onSubmitEmployee(AddNewEmployee: NgForm): void{
    this.isAbleToSubmit=!this.isAbleToSubmit;
      this.employeeService.addEmployee(AddNewEmployee.value).subscribe(
        (response : Employee)=>{alert("EMPLOYEE ADDED"); window.location.reload()},
        (error:HttpErrorResponse)=>{alert(error.message)}
        
      ); 
  }
  

}
