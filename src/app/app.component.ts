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
  title = "Mind'yoBuissness'";


  constructor(){};

  ngOnInit() {
   
    
  }


  
}
