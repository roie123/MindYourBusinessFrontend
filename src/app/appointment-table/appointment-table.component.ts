import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Appointment } from '../MODELS/appointments';
import { AppointmentService } from '../SERVICES/appointment.service';

@Component({
  selector: 'app-appointment-table',
  templateUrl: './appointment-table.component.html',
  styleUrls: ['./appointment-table.component.css']
})
export class AppointmentTableComponent implements OnInit {
  public appointments!:Appointment[];
  constructor(private appointmentService:AppointmentService) { }

  ngOnInit(): void {
    this.getAppointments();

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

}
