import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { DepartementComponent } from "./departement/departement.component";
import { EmployeeComponent } from "./employee/employee.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/EmpManager/all', pathMatch: 'full' },
  { path: 'EmpManager/all', component: EmployeeComponent},
  { path: 'DepManager/all', component:  DepartementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})  



export class AppRoutingModule { }