import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'assignment2';

  constructor(private router:Router, private empService:EmployeeService) {}

  ngOnInit(): void {
  }

  logout() {
    this.empService.setLoginStatus(false)
    this.router.navigate(['/login'])
  }

  getLoginStatus() {
    return this.empService.loginStatus
  }
}
