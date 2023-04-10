import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { EmployeeService, Employee, InputData } from '../employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, OnDestroy{
  employees: Observable<any> = new Observable()
  
  constructor(private empService: EmployeeService, private router:Router, private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.employees = this.empService.getEmployee()
  }


  navigate(emp:Employee) {
    this.router.navigate(['/add', {empObj: JSON.stringify(emp)}]);
  }

  delete(eid: String) {
    this.empService.delete(eid).subscribe(res=>{
      console.log(res)
      this.redirectTo('/employees');
    })
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }

  ngOnDestroy() {
    
  }

}
