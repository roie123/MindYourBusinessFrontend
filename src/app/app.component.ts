import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Appointment } from './MODELS/appointments';
import { Client } from './MODELS/client';
import { Employee } from './MODELS/employee';
import { AppointmentService } from './SERVICES/appointment.service';
import { ClientService } from './SERVICES/client.service';
import { EmployeeService } from './SERVICES/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myEmployeesFront';
  private employees!:Employee[];
  private appointments!:Appointment[];
  private clients!:Client[];
  public showEmployeeTable =false;
  public showAppointmentTable =false;
  public showClientTable=false;
  public showServicesTable=false;

  constructor(){};

  ngOnInit() {
   
    
  }

  public showEmployees():void{
this.showEmployeeTable=!this.showEmployeeTable;
this.showAppointmentTable=false;
this.showClientTable=false;
this.showServicesTable=false;

  }

  public showAppointments():void{
    this.showAppointmentTable=!this.showAppointmentTable;
    this.showEmployeeTable=false;
    this.showClientTable=false;
    this.showServicesTable=false;

      }
      public showClients():void{
        this.showClientTable=!this.showClientTable;
        this.showServicesTable=false;
        this.showAppointmentTable=false;
        this.showEmployeeTable=false;
        
          }
          public showServices():void{
            this.showServicesTable=!this.showServicesTable;
            this.showClientTable=false;
            this.showAppointmentTable=false;
            this.showEmployeeTable=false;
            
              }
  
}
