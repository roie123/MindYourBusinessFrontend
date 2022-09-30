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

  public updateAppointment(appointment:Appointment):Observable<Appointment>{
    return this.Http.put<Appointment>(`${this.appointmentUrl}/update`,appointment); 
}
public deleteAppointment(appointmentId:number):Observable<void>{
  return this.Http.delete<void>(`${this.appointmentUrl}/delete/${appointmentId}`)
}
public removeClient(appointment:Appointment):Observable<Appointment>{
  return this.Http.put<Appointment>(`${this.appointmentUrl}/remove`,appointment); 
}
public addAppointmentById(clientId:number,employeeId:number,serviceId:number,appointment:Appointment):Observable<void>{
  
  return this.Http.post<void>(`${this.appointmentUrl}/add/${clientId}/${employeeId}/${serviceId}`,appointment)
}
 


}
