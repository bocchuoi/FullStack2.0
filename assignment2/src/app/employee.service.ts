import { Injectable } from '@angular/core';
import { Apollo, gql, Query } from 'apollo-angular';

export interface Employee {
  _id:string,
  firstName:string,
  lastName:string,
  email:string,
  gender:string,
  salary:number,
}

export interface InputData {
  firstName:string,
  lastName:string,
  email:string,
  gender:string,
  salary:number,
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private apollo: Apollo) { }

  getEmployee() {
    const getemps = gql`
      query {
        getAllEmployees {
          _id
          firstName
          lastName
          email
          gender
          salary
        }
      }
    `;

    const obs = this.apollo.watchQuery<any>({
      query: getemps
    }).valueChanges
    return obs
  }

  addEmployee(employee: Employee) {
    let result:any
    const {_id, ...emp} = employee
    emp.salary = Number(employee.salary)
    const addEmp = gql`
      mutation AddEmployee($emp: InputData!) {
        addEmployee(employee: $emp)
      }
    `

    this.apollo.mutate({
        mutation: addEmp,
        variables: {
          emp: emp,
        },
      })
      .subscribe(
        ({ data }) => {
          console.log('got data', data);
        },
      );
  }

  mutateEmployee(employee: Employee, update:boolean=false) {
    let result:any
    const funcName = (update) ? 'update' : "add"
    const mutateEmp = gql`
      mutation ${funcName.toUpperCase()}Employee($emp: Employee!) {
        ${funcName}Employee()
      }
    `

    this.apollo.mutate({
        mutation: mutateEmp,
        variables: {
          emp: employee,
        },
      })
      .subscribe(
        ({ data }) => {
          console.log('got data', data);
        },
      );
  }
}
