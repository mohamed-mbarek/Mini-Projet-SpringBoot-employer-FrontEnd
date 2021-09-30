import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Departement } from '../model/departement';

@Injectable({
  providedIn: 'root'
})

export class DepartementService {
private apiServiceUrl=environment.apiBaseUrl;

  constructor(private http :HttpClient) { }

  public getDepartements(): Observable<Departement[]>{
    return this.http.get<Departement[]>(`${this.apiServiceUrl}/departement/all`);
  }
public addDep(departement :Departement):Observable<Departement>{
return  this.http.post<Departement>(`${this.apiServiceUrl}/departement/add`,departement);
}
public UpdateDep(departement :Departement):Observable<Departement>{
  return  this.http.put<Departement>(`${this.apiServiceUrl}/departement/update`,departement);
}
public deleteDep(depId:number):Observable<void>{
  return  this.http.delete<void>(`${this.apiServiceUrl}/departement/delete/${depId}`);
  
}
}