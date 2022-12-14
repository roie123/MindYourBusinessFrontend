import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllowedProceduresToPerforme } from '../MODELS/allowedProceduresToPerform';

@Injectable({
  providedIn: 'root'
})
export class AllowedProcuduresToPerformService {

  private servicesUrl='http://localhost:8080/services';

  constructor(private Http:HttpClient) { }
  public getAllowedProcedurs() : Observable<AllowedProceduresToPerforme[]>{
    return this.Http.get<AllowedProceduresToPerforme[]>
    (`${this.servicesUrl}/all`);
  }
  public updateService(allowedProcuduresToPerform:AllowedProceduresToPerforme):Observable<AllowedProceduresToPerforme>{
    return this.Http.put<AllowedProceduresToPerforme>(`${this.servicesUrl}/update`,allowedProcuduresToPerform); 
  }
  public addService(service:AllowedProceduresToPerforme,employeeId:number):Observable<AllowedProceduresToPerforme>{
    return this.Http.post<AllowedProceduresToPerforme>(`${this.servicesUrl}/add/${employeeId}`,service);
  }
  public removeService(serviceId:number, allowedProcuduresToPerform:AllowedProceduresToPerforme):Observable<AllowedProceduresToPerforme>{
    return this.Http.put<AllowedProceduresToPerforme>(`${this.servicesUrl}/remove/${serviceId}`,allowedProcuduresToPerform); 
  }
}


