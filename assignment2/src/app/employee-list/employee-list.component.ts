import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService, Employee, InputData } from '../employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  employees: Employee[] = []
  constructor(
    private empService: EmployeeService,
    private router:Router, 
    private route:ActivatedRoute) {
}

  ngOnInit() {
    this.getEmployees()
 
  }

  getEmployees() {
    this.empService.getEmployee().subscribe(val=>{
        this.employees = val.data.getAllEmployees
    })
  }

  navigate(emp:Employee) {
    console.log('asd')
    this.router.navigate(['/add', {empObj: JSON.stringify(emp)}]);
  }

}
