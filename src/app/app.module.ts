import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { AppointmentTableComponent } from './appointment-table/appointment-table.component';
import { ClientTableComponent } from './client-table/client-table.component';
import { ServiceTableComponent } from './service-table/service-table.component';
import { FormsModule } from '@angular/forms';
import { EmployeeFormComponent } from './employee-table/employee-form/employee-form.component';
import { RouterModule } from '@angular/router';
import { ClientFormComponent } from './client-table/client-form/client-form.component';
import { AppointmentFormComponent } from './appointment-table/appointment-form/appointment-form.component';
import { ServiceFormComponent } from './service-table/service-form/service-form.component';
import { FinancialComponent } from './financial/financial.component';
import { FinanceFormComponent } from './financial/finance-form/finance-form.component';
import { ExpenseFormComponent } from './financial/expense-form/expense-form.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeTableComponent,
    AppointmentTableComponent,
    ClientTableComponent,
    ServiceTableComponent,
    EmployeeFormComponent,
    ClientFormComponent,
    AppointmentFormComponent,
    ServiceFormComponent,
    FinancialComponent,
    FinanceFormComponent,
    ExpenseFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
