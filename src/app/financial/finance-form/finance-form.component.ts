import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExpenseService } from 'src/app/SERVICES/expense.service';
import { IncomeService } from 'src/app/SERVICES/income.service';

@Component({
  selector: 'app-finance-form',
  templateUrl: './finance-form.component.html',
  styleUrls: ['./finance-form.component.css']
})
export class FinanceFormComponent implements OnInit {

  constructor(private expenseService:ExpenseService, private incomeService:IncomeService) { }

  public isAbleToSubmit=true;

  ngOnInit(): void {
  }


  public addExpense(newExpense:NgForm){
    this.expenseService.addExpense(newExpense.value).subscribe();
   }
  
   public addIncome(newIncome:NgForm){
    this.incomeService.addIncome(newIncome.value).subscribe();
    this.isAbleToSubmit=!this.isAbleToSubmit;
    window.location.reload();
   }
}
