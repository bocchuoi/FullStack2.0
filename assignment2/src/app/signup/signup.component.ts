import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username = ""
  password = ""
  email = ""
  msg = ""

  constructor(private empService:EmployeeService, private router:Router) {}

  signup() {
    if (this.username && this.password && this.email) {
      this.empService.signup(this.username, this.password, this.email).subscribe(res=>{
        this.msg = res.data.signup
        if (res.data.signup == "Account Registered") {
          this.empService.setLoginStatus(true)
          this.router.navigate(['/employees'])
        }
      })
    }
    else {
      this.msg = 'Please fill in all the fields!'
    }
  }
}
