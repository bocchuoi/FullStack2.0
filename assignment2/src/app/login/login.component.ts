import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = ""
  password = ""
  msg = ""

  constructor(private empService:EmployeeService, private router:Router) {}

  login() {
    this.empService.login(this.username, this.password).subscribe(res=>{
      if (this.username && this.password) {
        // I should update the login response to a be boolean rather than a string...
        if (res.data.login != "You shall not pass!") {
          this.empService.setLoginStatus(true)
          this.msg = "Login success!"
          this.router.navigate(['employees'])
        }
        else {
          this.msg = "Incorrect credentials!"
        }
      }
      else {
        this.msg = "Please enter username and password!"
      }

    })
  }
}
