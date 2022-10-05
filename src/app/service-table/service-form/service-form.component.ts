import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { AllowedProceduresToPerforme } from 'src/app/MODELS/allowedProceduresToPerform';
import { Employee } from 'src/app/MODELS/employee';
import { AllowedProcuduresToPerformService } from 'src/app/SERVICES/allowed-procudures-to-perform.service';
import { EmployeeService } from 'src/app/SERVICES/employee.service';


@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent implements OnInit {
public services!:AllowedProceduresToPerforme[];
isAbleToSubmit=true;
public employees!:Employee[];
public selectedEmployeeId!:number;
  constructor(private proceduresService:AllowedProcuduresToPerformService,private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.getActiveEmployees();

    // this.getServices();
  }

public addService(service:NgForm){
  this.proceduresService.addService(service.value,this.selectedEmployeeId).subscribe(
    (response : AllowedProceduresToPerforme)=>{console.log(service),
      (response:HttpErrorResponse)=>{console.log(response.message)}});
      window.location.reload();
}
public submitToggle(){
  this.isAbleToSubmit=!this.isAbleToSubmit;
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
 

}
