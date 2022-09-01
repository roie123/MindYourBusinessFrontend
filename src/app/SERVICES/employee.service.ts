import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../MODELS/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeUrl='http://localhost:8080/employees';

  constructor(private Http:HttpClient) { }

  public getEmployees() : Observable<Employee[]>{
    return this.Http.get<Employee[]>
    (`${this.employeeUrl}/all`);
  }

  public addEmployee(employee:Employee):Observable<Employee>{
    return this.Http.post<Employee>(`${this.employeeUrl}/add`,employee);
  }
  
  public updateEmployee(employee:Employee):Observable<Employee>{
    return this.Http.put<Employee>(`${this.employeeUrl}/update`,employee);
  }

  public deleteEmployee(employeeId:number):Observable<void>{
    return this.Http.delete<void>(`${this.employeeUrl}/delete/${employeeId}`)
  }

  
}
