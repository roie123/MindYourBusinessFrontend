import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Appointment } from '../MODELS/appointments';
import { Employee } from '../MODELS/employee';
import { AppointmentService } from '../SERVICES/appointment.service';

@Component({
  selector: 'app-appointment-table',
  templateUrl: './appointment-table.component.html',
  styleUrls: ['./appointment-table.component.css']
})
export class AppointmentTableComponent implements OnInit {
  public appointments!:Appointment[];
  public appointment!:Appointment;
  public isShowingAppointmentForm=false;
  public isShowingAppointmentsEditForm=false;

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
  public   onUpdateAppointment(editAppointment :NgForm, appointmentId:number):void{
    this.appointment = editAppointment.value;
    this.appointment.id=appointmentId;
    console.log(this.appointment);
    this.appointmentService.updateAppointment(this.appointment).subscribe(
        (response : Appointment)=>{
          console.log("CLIENT EDITED")
          this.isShowingAppointmentsEditForm=!this.isShowingAppointmentsEditForm;
            
            // window.location.reload();
        },
        (error :HttpErrorResponse)=>{
          console.log(error.message)
        }

    )
    
  }
  public showEdit():void{
    this.isShowingAppointmentsEditForm=!this.isShowingAppointmentsEditForm;
  }
  public showAddForm():void{
    this.isShowingAppointmentForm=!this.isShowingAppointmentForm;
  }
    public cancelAppointment(appointmentId:number){
      this.appointmentService.deleteAppointment(appointmentId).subscribe();
      window.location.reload();
    }





}
