import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { AppointmentTableComponent } from './appointment-table/appointment-table.component';
import { ClientTableComponent } from './client-table/client-table.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeTableComponent,
    AppointmentTableComponent,
    ClientTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
