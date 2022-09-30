import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from 'src/app/MODELS/client';
import { ClientService } from 'src/app/SERVICES/client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  public isAbleToSubmit=true;

  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
  }

  public onSubmitClient(newClient:NgForm):void{
    this.isAbleToSubmit=!this.isAbleToSubmit;
      this.clientService.addClient(newClient.value).subscribe(
        (response : Client)=>{alert("CIENT ADDED"); 
        window.location.reload()},
        (error:HttpErrorResponse)=>{alert(error.message)}
        
      ); 
  }

}
