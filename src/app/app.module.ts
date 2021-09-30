import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeService } from './service/employee.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { DepartementService } from './service/departement.service';
import { DepartementComponent } from './departement/departement.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartementComponent,
    EmployeeComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule

  ],
  
  providers: [EmployeeService,DepartementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
