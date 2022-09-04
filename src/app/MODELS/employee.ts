import { AllowedProceduresToPerforme } from "./allowedProceduresToPerform";

export interface Employee{
    id:number,
    firstName:string,
    lastName: string,
    yearsOfExperience :number,
    allowedProceduresToPerform:AllowedProceduresToPerforme[],
    email : string,
    position : string;

}