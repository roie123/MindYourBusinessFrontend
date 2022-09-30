import { AllowedProceduresToPerforme } from "./allowedProceduresToPerform";

export interface Client{
    id : number,
    firstName:string,
    lastName :string,
    phoneNumber:string,
    procedureSet:AllowedProceduresToPerforme[],
    isActive:boolean
}