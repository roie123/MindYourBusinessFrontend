import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AllowedProceduresToPerforme } from '../MODELS/allowedProceduresToPerform';
import { AllowedProcuduresToPerformService } from '../SERVICES/allowed-procudures-to-perform.service';

@Component({
  selector: 'app-service-table',
  templateUrl: './service-table.component.html',
  styleUrls: ['./service-table.component.css']
})
export class ServiceTableComponent implements OnInit {
  public services!:AllowedProceduresToPerforme[];
  public isShowingForm=false;
  constructor(private serviceService:AllowedProcuduresToPerformService ) { }
 
  ngOnInit(): void {
    this.getServices();
  }


  public getServices(): void {
    this.serviceService.getAllowedProcedurs().subscribe(
      (response: AllowedProceduresToPerforme[]) => {
        this.services = response;
        console.log(this.services);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public showFormToggle(){
    this.isShowingForm=!this.isShowingForm;
  }

}
