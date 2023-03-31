import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: 'add', component: AddComponent},
  {path: 'update', component: EmployeeListComponent},
  {path: 'delete', component: EmployeeListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
