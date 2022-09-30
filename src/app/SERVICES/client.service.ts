import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../MODELS/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private ClientsUrl='http://localhost:8080/clients';

  constructor(private Http:HttpClient) { }
  public getClients() : Observable<Client[]>{
    return this.Http.get<Client[]>
    (`${this.ClientsUrl}/all`);
  }
  public getActiveClients() : Observable<Client[]>{
    return this.Http.get<Client[]>
    (`${this.ClientsUrl}/all/active`);
  }
  public getRemovedClients() : Observable<Client[]>{
    return this.Http.get<Client[]>
    (`${this.ClientsUrl}/all/removed`);
  }

  public addClient(client:Client):Observable<Client>{
    return this.Http.post<Client>(`${this.ClientsUrl}/add`,client);
  }
  public updateClient(client:Client):Observable<Client>{
    return this.Http.put<Client>(`${this.ClientsUrl}/update`,client); 
}
public deleteClient(clientId:number):Observable<void>{
  return this.Http.delete<void>(`${this.ClientsUrl}/delete/${clientId}`)
}
public removeClient(client:Client):Observable<Client>{
  return this.Http.put<Client>(`${this.ClientsUrl}/remove`,client); 
}


}
