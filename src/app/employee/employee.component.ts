import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Departement } from '../model/departement';
import { Employee } from '../model/employee';
import { DepartementService } from '../service/departement.service';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public  employees:Employee[] ;
  public editEmployee:Employee;
  public deleteEmployee:Employee;
  public  departements:Departement[] ;
  constructor( private employeeService:EmployeeService ,private departementService:DepartementService){};
  
  ngOnInit(){
    this.getEmployees();
    this.getListDepartement();      
  }
  
  
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
  public onAddEmployee(addForm:NgForm):void{
    document.getElementById('add-employee-form').click();
    console.log(addForm.value)
    this.employeeService.addEmployee(addForm.value).subscribe(
      (responce:Employee)=>{
        console.log(responce);
        this.getEmployees;
        addForm.reset();
        this.ngOnInit();
  
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      },
  
    );
  }
    public onUpdateEmployee(employee:Employee):void{
      document.getElementById('add-employee-form').click();
      this.employeeService.UpdateEmployee(employee).subscribe(
        (responce:Employee)=>{
          console.log(responce);
          this.getEmployees;
          this.ngOnInit();
        },
        (error:HttpErrorResponse)=>{
          alert(error.message);
        },
    
      );
    }
  public onDeleteEmployee(idEmployee :number){
    document.getElementById('add-employee-form').click();
    this.employeeService.deleteEmployee(idEmployee).subscribe(
      (responce:void)=>{
        console.log(responce);
        this.getEmployees;
        this.ngOnInit();
  
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      },
  
    );
  }
public getListDepartement() :void{
  this.departementService.getDepartements().subscribe(
    (reponse:Departement[])=>{
      this.departements=reponse;
    },
    (error:HttpErrorResponse)=>{
      alert(error.message);
    });
  }
}  

  
  
  
  

