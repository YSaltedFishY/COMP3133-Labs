// This file will contain all GraphQL types
const { gql } = require('apollo-server-express')



exports.typeDefs = gql`
    type Employee {
        id: ID!
        firstname: String!
        lastname: String!
        email: String!
        gender: String!
        city: String!
        designation: String!
        salary: Float!
        created: String!
    }

    #query type - defines operations for retrieving data

    type Query {
        getEmployees : [Employee]

        getEmployeeByCity(city: String!) : [Employee]

        getEmployeeByFirstname(firstname: String!) : [Employee]

        getEmployeeById(id: ID!) : Employee
    }

    type Mutation {
        addEmployee(
            firstname: String!
            lastname: String!
            email: String!
            gender: String!
            city: String!
            designation: String!
            salary: Float! 
        ) : Employee

        updateEmployee(
            id: ID!
            firstname: String
            lastname: String
            gender: String
            city: String
            designation: String
            salary: Float
        ) : Employee
        
        deleteEmployee(id: ID!) : Employee
    }


`