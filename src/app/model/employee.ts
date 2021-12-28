import { Departement } from "./departement";

export interface Employee {
    id?:number ;
    name?:string ;
    email?:string ;
    jobTitle?:string ;
    phone?:string ;
    imageUrl?:string;
    employeeCode?:string;
    dateEmbauche?:Date;
    dep?:Departement; 
}
