import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee, EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  emp:Employee = {
    _id: "",
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    salary: 0
  }
  constructor(
    private empService: EmployeeService,
    private router:Router, 
    private route:ActivatedRoute) {
}

  ngOnInit() {
    if (this.route.snapshot.paramMap.has('empObj')) {
      this.emp = JSON.parse(this.route.snapshot.paramMap.get('empObj') || '{}');
    }
  }

  addEmployee() {
    this.empService.addEmployee(this.emp)
  }


}
