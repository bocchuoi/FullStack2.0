import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  employees: Employee[] = []
  constructor(private empService: EmployeeService) {
  }

  ngOnInit() {
    this.getEmployees()
  }

  getEmployees() {
    this.empService.getEmployee().subscribe(val=>{
        this.employees = val.data.getAllEmployees
    })
  }

}
