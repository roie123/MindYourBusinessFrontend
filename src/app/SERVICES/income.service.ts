import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IncomeItem } from '../MODELS/incomeItem';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  private incomeUrl='http://localhost:8080/income';


  constructor(private Http:HttpClient) { }

  public getIncome() : Observable<IncomeItem[]>{
    return this.Http.get<IncomeItem[]>
    (`${this.incomeUrl}/all`);
  }

  public addIncome(incomeItem:IncomeItem):Observable<IncomeItem>{
    return this.Http.post<IncomeItem>(`${this.incomeUrl}/add`,incomeItem);
  }
  
  public updateIncome(income:IncomeItem):Observable<IncomeItem>{
    return this.Http.put<IncomeItem>(`${this.incomeUrl}/update`,income);
  }
  public findById(incomeId:number):Observable<IncomeItem>{
    return this.Http.get<IncomeItem>(`${this.incomeUrl}/${incomeId}`);
  }

  public removeById(incomeId:number,income:IncomeItem):Observable<IncomeItem>{
    return this.Http.put<IncomeItem>(`${this.incomeUrl}/remove/${incomeId}`,income);
  }

}
