
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Departement } from './model/departement';
import { Employee } from './model/employee';
import { EmployeeService } from './service/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public listEmp:Employee[];
  public  employees:Employee[] ;
  public editEmployee:Employee;
  public deleteEmployee:Employee;
  editDepartement:Departement;
  deleteDepartement:Departement;
  constructor( private employeeService:EmployeeService){};

  public searchEmployee(key:string):void{
    console.log(key);
      const resultat:Employee[]=[];
      for(const employee of this.employees ){
        if(employee.name.toLocaleLowerCase().indexOf(key.toLowerCase())!==-1 
        ||employee.email.toLocaleLowerCase().indexOf(key.toLowerCase())!==-1
        ||employee.phone.toLocaleLowerCase().indexOf(key.toLowerCase())!==-1
        ||employee.jobTitle.toLocaleLowerCase().indexOf(key.toLowerCase())!==-1){
          resultat.push(employee);
        }
      }
      this.employees=resultat ;
      if(resultat.length===0||!key){
        this.getEmployees();
      }
    
    }
    public getEmployees():void{
      this.employeeService.getEmployees().subscribe(
        (reponse:Employee[])=>{
          this.employees=reponse;
        },
        (error:HttpErrorResponse)=>{
          alert(error.message);
        });
      
      }
      public onOpenModal(employee: Employee, mode: string): void {
    
        const container = document.getElementById('main-container');
        const button = document.createElement('button');
        button.type = 'button';
        button.style.display = 'none';
        button.setAttribute('data-toggle', 'modal');
        if (mode === 'add') {
          button.setAttribute('data-target', '#addEmployeeModal');
        
        }
        if (mode === 'edit') {
          this.editEmployee=employee;
          button.setAttribute('data-target', '#updateEmployeeModal');
        }
        if (mode === 'delete') {
          this.deleteEmployee=employee;
          button.setAttribute('data-target', '#deleteEmployeeModal');
        }
        container.appendChild(button);
        button.click();
      } 
      
  public onOpenModalL(departement: Departement, mode: string): void {
    
    const container = document.getElementById('main-containerD');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'addDep') {
      button.setAttribute('data-target', '#addDepModal');
    }
    if (mode === 'deleteDep') {
      this.deleteDepartement=departement;
      button.setAttribute('data-target', '#onDeleteDepartement');
    }
    container.appendChild(button);
    button.click();
  }
    }