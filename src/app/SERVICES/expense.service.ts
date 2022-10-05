import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../MODELS/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expenseUrl='http://localhost:8080/expenses';


  constructor(private Http:HttpClient) { }

  public getExpenses() : Observable<Expense[]>{
    return this.Http.get<Expense[]>
    (`${this.expenseUrl}/all`);
  }

  public addExpense(expense:Expense):Observable<Expense>{
    return this.Http.post<Expense>(`${this.expenseUrl}/add`,expense);
  }
  
  public updateExpense(expense:Expense):Observable<Expense>{
    return this.Http.put<Expense>(`${this.expenseUrl}/update`,expense);
  }
  public findById(expenseId:number):Observable<Expense>{
    return this.Http.get<Expense>(`${this.expenseUrl}/${expenseId}`);
  }
  public removeById(expenseId:number,expense:Expense):Observable<Expense>{
    return this.Http.put<Expense>(`${this.expenseUrl}/remove/${expenseId}`,expense);
  }
}
