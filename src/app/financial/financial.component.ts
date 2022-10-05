import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AllowedProceduresToPerforme } from '../MODELS/allowedProceduresToPerform';
import { Appointment } from '../MODELS/appointments';
import { Client } from '../MODELS/client';
import { Employee } from '../MODELS/employee';
import { Expense } from '../MODELS/expense';
import { IncomeItem } from '../MODELS/incomeItem';
import { AppointmentService } from '../SERVICES/appointment.service';
import { EmployeeService } from '../SERVICES/employee.service';
import { ExpenseService } from '../SERVICES/expense.service';
import { IncomeService } from '../SERVICES/income.service';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.css']
})
export class FinancialComponent implements OnInit {
  public expenses!:Expense[];
  public employees!:Employee[];
  public appointments!:Appointment[];
  public incomeItems!:IncomeItem[];
  
  public canAddIncome=false;
  public canAddexpense=false;

  public canRemove=false;

  public totalSalaries =0;
 
 public isShowingIncome=true;
 public isShowingExpenses=true;
  
  

  constructor(private expenseService:ExpenseService, private employeeService:EmployeeService,private appointmentService:AppointmentService,private incomeService:IncomeService) { }

  ngOnInit(): void {
    this.getExpenses();
    this.getActiveEmployees();
    this.getIncomeItems();
      this.getAppointments();

    
    
  }


  public getExpenses(){
    this.expenseService.getExpenses().subscribe(
      (response: Expense[]) => {
        this.expenses = response;
        console.log(this.expenses);

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  


  public getActiveEmployees(): void {
    this.employeeService.getActiveEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
  public getAppointments(): void {
    this.appointmentService.getCompletedAppointments().subscribe(
      (response: Appointment[]) => {
        this.appointments = response;
        console.log("APPOINTMNETS"+this.appointments);
        this.calcTotalIncomeFromAppointments();


        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getIncomeItems(): void {
    this.incomeService.getIncome().subscribe(
      (response: IncomeItem[]) => {
        this.incomeItems = response;
        console.log(this.incomeItems);
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

public calcTotalIncomeFromAppointments():number{
  let totalIncomFromAppointment=0;
  
  this.appointments.forEach(app=>totalIncomFromAppointment+=app.someService.price);
  console.log("CALC T FROM APP" + totalIncomFromAppointment);
  return totalIncomFromAppointment;
}

public calcTotalFromIncomeItems():number{
  let total=0;
  this.incomeItems.forEach(item=>total+=item.sum);
  console.log("CALC T FROM ITEMS "+total)
return total;
}
 public calcTotalRevenue():number{
  let totalRevenue=0;
  totalRevenue+=this.calcTotalFromIncomeItems()+this.calcTotalIncomeFromAppointments();
  console.log("TOTAL REVENUE : " +totalRevenue);
  return totalRevenue;
 }

 public calcTotalSalaries():number{
  let salaries=0;
  this.employees.forEach(emp=> salaries+= emp.salary);
  console.log("calc T Salaries "+ salaries);
  return salaries;
 }

 public calcTotalExpenses():number{
  let sum=0;
  this.expenses.forEach(ex=>sum+=ex.sum);
  sum+=this.calcTotalSalaries();
  console.log("T EX : "+ sum);
  return sum;
 }


public addIncomeButtonPress(){
  this.canAddexpense=false;
  this.canAddIncome=!this.canAddIncome;
}

public addExpenseButtonPress(){
  this.canAddIncome=false;
  this.canAddexpense=!this.canAddexpense;
}


public showEdit(){
this.canRemove=!this.canRemove;
}
public removeExpense(expense:Expense){
  this.expenseService.removeById(expense.id,expense).subscribe();
  window.location.reload();

}
public removeIncomeItem(income:IncomeItem){
  this.incomeService.removeById(income.id,income).subscribe();
  window.location.reload();
}



public toggleExpenseTable(){
  this.isShowingExpenses=!this.isShowingExpenses;
}

public toggleIncomeTable(){
  this.isShowingIncome=!this.isShowingIncome;
}
}
