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

  constructor(private employeeService:EmployeeService,private appointmentService:AppointmentService,private clientService:ClientService){};

  ngOnInit() {
    this.getEmployees();
    this.getAppointments();
    this.getClients();
    
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
  public getAppointments(): void {
    this.appointmentService.getAppointments().subscribe(
      (response: Appointment[]) => {
        this.appointments = response;
        console.log(this.appointments);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getClients(): void {
    this.clientService.getClients().subscribe(
      (response: Client[]) => {
        this.clients = response;
        console.log(this.clients);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
