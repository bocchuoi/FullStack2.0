import { Injectable } from '@angular/core';
import { Apollo, gql, Query } from 'apollo-angular';
import { map } from 'rxjs';

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

  getemps = gql`
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
`

  loginStatus:boolean

  constructor(private apollo: Apollo) { 
    this.loginStatus = localStorage.getItem('login') == "true" ? true : false 
  }

  getEmployee() {

    const obs = this.apollo.watchQuery<any>({
      query: this.getemps
    }).valueChanges.pipe(map(val => val.data.getAllEmployees))
    return obs
  }

  addEmployee(employee: Employee) {
    const {_id, ...emp} = employee
    emp.salary = Number(employee.salary)
    const addEmp = gql`
      mutation AddEmployee($emp: InputData!) {
        addEmployee(employee: $emp) {
          _id
        }
      }
    `

    return this.apollo.mutate<any>({
        mutation: addEmp,
        variables: {
          emp: emp,
        },
        refetchQueries: [{
          query: this.getemps,
        }],
      })
  }

  updateEmployee(employee: any) {
    const {email, __typename, ...emp} = employee
    emp.salary = Number(employee.salary)

    const updateEmp = gql`
      mutation UpdateEmployee($emp: UpdateData!) {
        updateEmployee(employee: $emp) {
          _id
        }
      }
    `
    return this.apollo.mutate({
        mutation: updateEmp,
        variables: {
          emp: emp,
        },
        refetchQueries: [{
          query: this.getemps,
        }],
      })
  }


  delete(eid: String) {

    const delEmp = gql`
      mutation DeleteEmployee($eid: String!) {
        deleteEmployee(eid: $eid) {
          _id
        }
      }
    `

    return this.apollo.mutate({
        mutation: delEmp,
        variables: {
          eid: eid,
        },
        refetchQueries: [{
          query: this.getemps,
        }],
      })
  }

  login(username:string, password: string) {
    const login = gql`
    query Login($username: String!, $password: String!){
      login(username: $username, password: $password)
    }
  `
    const obs = this.apollo.watchQuery<any>({
      query: login,
      variables: {
        username: username,
        password: password
      }
    }).valueChanges
    return obs
  }

  signup(username:string, password: string, email: string) {
    const signup = gql`
      mutation SignUp($username: String!, $password: String!, $email: String!) {
        signup(username: $username, password: $password, email: $email)
      }
    `

    return this.apollo.mutate<any>({
        mutation: signup,
        variables: {
          username: username,
          password: password,
          email: email,
        },
    })
  }

  setLoginStatus(stat=true) {
    this.loginStatus=stat
    localStorage.setItem('login', 'true')
  }
}
