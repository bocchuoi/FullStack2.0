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
}
