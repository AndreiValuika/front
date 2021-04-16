import { Component, OnInit } from '@angular/core';
import {DepartmentEmployeeResponseModel} from '../../models/DepartmentEmployeeResponseModel'
import {ProvideService} from '../../services/provide.service'
@Component({
  selector: 'employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css'],
  providers: [ProvideService]
})
export class EmployeesTableComponent implements OnInit {
  employees:DepartmentEmployeeResponseModel[];
  constructor(private service:ProvideService) { }

  ngOnInit(): void {
    this.service.getEmloyees()
    .subscribe(
      result =>{this.employees = result;},
      error => console.error(error)
      );
    
    
  }

}
