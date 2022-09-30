import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from '../MODELS/client';
import { ClientService } from '../SERVICES/client.service';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css']
})
export class ClientTableComponent implements OnInit {
public clients!:Client[];
public isShowingClientForm=false;
public isShowingEditForm =false;
public client!:Client;
  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.getClients();
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

  public showClientForm():void{
    this.isShowingClientForm=!this.isShowingClientForm;
    
  }
  public   onUpdateClient(editClient :NgForm, ClientId:number):void{
    this.client = editClient.value;
    this.client.id=ClientId;
    console.log(this.client);
    this.clientService.updateClient(this.client).subscribe(
        (response : Client)=>{
          console.log("CLIENT EDITED")
          this.isShowingEditForm=!this.isShowingEditForm;
            
            window.location.reload();
        },
        (error :HttpErrorResponse)=>{
          console.log(error.message)
        }

    )
    
  }
  public removeClient(clientEdit:Client):void{
  
    this.clientService.removeClient(clientEdit).subscribe();
    console.log(clientEdit,"CLIENT REMOVED");
    
    window.location.reload();
  }
  public showEditForm():void{
    this.isShowingEditForm=!this.isShowingEditForm;
  }
}
