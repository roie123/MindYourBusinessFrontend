import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../MODELS/employee';
import { Appointment } from '../MODELS/appointments';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService  {
  private appointmentUrl='http://localhost:8080/appointments';

  constructor(private Http:HttpClient) { }
  public getAppointments() : Observable<Appointment[]>{
    return this.Http.get<Appointment[]>
    (`${this.appointmentUrl}/all`);
  }

  public addAppointment(appointment:Appointment):Observable<Appointment>{
    return this.Http.post<Appointment>(`${this.appointmentUrl}/add`,appointment);
  }
  
 


}