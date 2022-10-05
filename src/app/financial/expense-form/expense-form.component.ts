import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExpenseService } from 'src/app/SERVICES/expense.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {
  public isAbleToSubmit=true;
  constructor(private expenseService:ExpenseService) { }

  ngOnInit(): void {
  }

  
  public addExpense(newExpense:NgForm){
    this.expenseService.addExpense(newExpense.value).subscribe();
    this.isAbleToSubmit=!this.isAbleToSubmit;
    window.location.reload();
   }
}
