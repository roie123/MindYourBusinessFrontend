import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from '../MODELS/client';
import { ClientService } from '../SERVICES/client.service';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css']
})
export class ClientTableComponent implements OnInit {
public clients!:Client[];
  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.getClients();
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
