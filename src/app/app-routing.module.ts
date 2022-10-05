import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppointmentTableComponent } from './appointment-table/appointment-table.component';
import { ClientTableComponent } from './client-table/client-table.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { FinancialComponent } from './financial/financial.component';
import { ServiceTableComponent } from './service-table/service-table.component';

const routes: Routes = [
  
  {path:'clients' ,title:'ClientTable' ,component:ClientTableComponent},
     {path:'employees',title:'EmployeeTable' ,component:EmployeeTableComponent},
   {path:'appointments',title:'AppointmentTable', component:AppointmentTableComponent},
   {path:'services',title:'ServiceTable', component:ServiceTableComponent},
   {path:'financial' ,title:'financial',component:FinancialComponent}


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
