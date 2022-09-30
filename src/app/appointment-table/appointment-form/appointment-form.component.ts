import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Appointment } from 'src/app/MODELS/appointments';
import { AppointmentService } from 'src/app/SERVICES/appointment.service';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {
  public isAbleToSubmit =true;
  public clientId!:number;
  public employeeId!:number;
  public serviceId!:number;
  constructor(private appointmentService:AppointmentService ) { }

  ngOnInit(): void {
  }

  public addNewAppointment(newAppointment:NgForm){
    this.isAbleToSubmit=!this.isAbleToSubmit;
    this.appointmentService.addAppointment(newAppointment.value).subscribe(
      (response : Appointment)=>{alert("APPOINTMENT ADDED"); window.location.reload()},
      (error:HttpErrorResponse)=>{alert(error.message)}
      
    ); 
  }

}
