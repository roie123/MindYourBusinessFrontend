import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AllowedProceduresToPerforme } from 'src/app/MODELS/allowedProceduresToPerform';
import { Appointment } from 'src/app/MODELS/appointments';
import { Client } from 'src/app/MODELS/client';
import { Employee } from 'src/app/MODELS/employee';
import { AllowedProcuduresToPerformService } from 'src/app/SERVICES/allowed-procudures-to-perform.service';
import { AppointmentService } from 'src/app/SERVICES/appointment.service';
import { ClientService } from 'src/app/SERVICES/client.service';
import { EmployeeService } from 'src/app/SERVICES/employee.service';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {
  public isAbleToSubmit =true;
public employees!:Employee[];
public clients!:Client[];
public services!:AllowedProceduresToPerforme[];


public selectedEmployee!:number;
public selectedClient!:number;
public selectedService!:number;
public newAppointment!:Appointment;

public selectedHour!:number;
public selectedMinute!:number;
public selectedDay!:number;
public selectedMonth!:number;
public selectedYear!:number;


public hourArray=[8,9,10,11,12,13,14,15,16,17,18];
public minuteArray=[15,30,45];
public dayArray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
public monthArray=[1,2,3,4,5,6,7,8,9,10,11,12];
public yearArray = [2022,2023,2024];


  constructor(private appointmentService:AppointmentService,
    private clientService:ClientService,
    private employeeService:EmployeeService ,
    private allowedProcedured:AllowedProcuduresToPerformService
    ) { }










  ngOnInit(): void {
this.getActiveEmployees();
this.getClients();
this.getServices();

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
public getClients(): void {
  this.clientService.getActiveClients().subscribe(
    (response: Client[]) => {
      this.clients = response;
      console.log(this.clients);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}
public getServices(): void {
  this.allowedProcedured.getAllowedProcedurs().subscribe(
    (response: AllowedProceduresToPerforme[]) => {
      this.services = response;
      console.log(this.services);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}










  public addNewAppointment(){
    this.isAbleToSubmit=!this.isAbleToSubmit;
   this.appointmentService.addAppointmentById(this.selectedClient,this.selectedEmployee,this.selectedService,
   this.selectedHour,this.selectedMinute,
   this.selectedDay,this.selectedMonth,this.selectedYear ,
   this.newAppointment).subscribe();
  }

}
