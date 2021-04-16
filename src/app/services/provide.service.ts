import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import {DepartmentEmployeeResponseModel} from '../models/DepartmentEmployeeResponseModel'
@Injectable({
  providedIn: 'root'
})
export class ProvideService {
 //private employees : DepartmentEmployeeResponseModel[]
  constructor(private client:HttpClient) {
    
   }
   getEmloyees() {
    return this.client.get<DepartmentEmployeeResponseModel[]>('https://localhost:44392/Employees');
  }
  
}
