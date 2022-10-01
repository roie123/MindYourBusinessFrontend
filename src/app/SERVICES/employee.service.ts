import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../MODELS/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeUrl='http://localhost:8080/employees';
  public static activeEmployees :Observable<Employee[]>;

  constructor(private Http:HttpClient) { }

  public getEmployees() : Observable<Employee[]>{
   
     this.Http.get<Employee[]>
    (`${this.employeeUrl}/all`);
    console.log(EmployeeService.activeEmployees);
    return EmployeeService.activeEmployees;
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
  public removeEmployee(employee:Employee):Observable<Employee>{
    return this.Http.put<Employee>(`${this.employeeUrl}/remove`,employee); 
  }
  public getActiveEmployees():Observable<Employee[]>
  {
    EmployeeService.activeEmployees = this.Http.get<Employee[]>(`${this.employeeUrl}/all/active`);
    return EmployeeService.activeEmployees
  }
  public getRemovedEmployees():Observable<Employee[]>
  {
    return this.Http.get<Employee[]>(`${this.employeeUrl}/all/removed`)
  }
  public getEmployeeById(employeeId:number) : Observable<Employee>{
   
   return this.Http.get<Employee>
   (`${this.employeeUrl}//find/${employeeId}`);
   console.log(EmployeeService.activeEmployees);
 }
  
}
