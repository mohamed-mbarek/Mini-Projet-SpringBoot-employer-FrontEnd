import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Departement } from '../model/departement';
import { DepartementService } from '../service/departement.service';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
  public  departements:Departement[] ;
  public editDepartement:Departement;
  public deleteDepartement:Departement;
  
  
  constructor( private departementService : DepartementService) { }

  public getDepartements():void{
    this.departementService.getDepartements().subscribe(
      (reponse:Departement[])=>{
        this.departements=reponse;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      });
    }
    
  ngOnInit(): void {
    this.getDepartements();
  }

  public onOpenModall(departement: Departement, mode: string): void {
    
    const container = document.getElementById('main-containerD');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'addDep') {
      button.setAttribute('data-target', '#addDepModal');
    }
    if (mode === 'editDep') {
      this.editDepartement=departement;
      button.setAttribute('data-target', '#updateDepModal');
    }
    if (mode === 'deleteDep') {
      this.deleteDepartement=departement;
      button.setAttribute('data-target', '#onDeleteDepartement');
    }
    container.appendChild(button);
    button.click();
  } 
  public onAddDepartement(addForm:NgForm):void{
    document.getElementById('add-employee-form').click();
    this.departementService.addDep(addForm.value).subscribe(
      (responce:Departement)=>{
        console.log(responce);
        this.getDepartements;
        addForm.reset();
        this.ngOnInit();
  
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      },
  
    );
  }
  public onUpdateDepartement(departement:Departement):void{
    document.getElementById('add-employee-form').click();
    this.departementService.UpdateDep(departement).subscribe(
      (responce:Departement)=>{
        console.log(responce);
        this.getDepartements;
        this.ngOnInit();
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      },
  
    );
  }
  public onDeleteDepartement(idDep :number){
    document.getElementById('add-employee-form').click();
    this.departementService.deleteDep(idDep).subscribe(
      (responce:void)=>{
        console.log(responce);
        this.getDepartements;
        this.ngOnInit();
  
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      },
  
    );
  }
  public searchDepartement(key:string):void{
    console.log(key);
      const resultat:Departement[]=[];
      for(const dep of this.departements){
        if(dep.nameDep.toLocaleLowerCase().indexOf(key.toLowerCase())!==-1)
          resultat.push(dep);
        }
      this.departements=resultat ;
    }
}
