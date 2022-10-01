import { Employee } from "./employee";

export interface AllowedProceduresToPerforme{
    id:number,
    name :string,
    durationInMinutes: number,
    employee:Employee,
    price:number,
    active:boolean;
}