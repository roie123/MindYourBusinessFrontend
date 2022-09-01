import { AllowedProceduresToPerforme } from "./allowedProceduresToPerform";
import { Client } from "./client";
import { Employee } from "./employee";

export interface Appointment{
    id:number,
    client:Client,
    employee:Employee,
    someService:AllowedProceduresToPerforme,
    localDateTime: string
}