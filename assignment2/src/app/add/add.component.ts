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
    salary: 20
  }

  msg = ""
  update:Boolean = false

  constructor(
    private empService: EmployeeService,
    private router:Router, 
    private route:ActivatedRoute) {
}

  ngOnInit() {
    if (this.route.snapshot.paramMap.has('empObj')) {
      this.emp = JSON.parse(this.route.snapshot.paramMap.get('empObj') || '{}');
      this.update = true
    }
  }

  hasEmptyField() {
    if (this.emp.salary != 0 && isNaN(Number(this.emp.salary))) {
      this.msg = "Please make sure salary is a number!"
      return true
    }
    for (var [key, val] of Object.entries(this.emp)) {
      if (val == "" && key != '_id') {
        this.msg = "Please fill in all the fields!"
        return true
      }
    }
    return false
  }

  addEmployee() {
    if (!this.hasEmptyField()) {
      this.empService.addEmployee(this.emp).subscribe(val => {
        if (val.data.addEmployee._id) {
          this.router.navigate(['/employees']);
        }
        else {
          this.msg = "Email is already in use!"
        }
      })
    }
  }

  updateEmployee() {
    this.emp.email = "email is not updatable"
    if (!this.hasEmptyField()) {
      this.empService.updateEmployee(this.emp).subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['/employees']);
        },
      );
    }

  }
}
