import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

let routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
];
console.log(localStorage.getItem('login'))
if (localStorage.getItem('login') === 'true') {
  routes = [
    {path: 'employees', component: EmployeeListComponent},
    {path: '', component: EmployeeListComponent},
    {path: 'add', component: AddComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
  ];
}


@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
