const {gql} = require("apollo-server-express")

const typeDefs = gql`
    # Type
    type Employee {
        _id: String!
        firstName: String!
        lastName: String!
        email: String! 
        gender: String!
        salary: Float!
    },

    type User {
        username: String!
        email: String!
        password: String! 
    }

    # Querries
    type Query {
        getAllEmployees: [Employee]
        login(username: String!, password: String!): String
        getEmployee(eid: String!): Employee
    }

    # Mutations
    type Mutation {
        signup(username: String!, password: String!, email: String!): String
        addEmployee(firstName: String!, lastName: String!, email: String!, gender: String!, salary: Float!): String
        updateEmployee(eid: String!, firstName: String!, lastName: String!, email: String!, gender: String!, salary: Float!): String
        deleteEmployee(eid: String!): String

    }

`

module.exports = typeDefs;