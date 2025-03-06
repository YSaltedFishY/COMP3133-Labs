const { emailRegex } = require('../constants');
const Employee = require('../models/Employee')


// This file will contain all GraphQL Resolvers
exports.resolvers = {
    Query: {
        getEmployees: async (parent, args) => {
            console.log(`Fetching all employees`)
            return await Employee.find({})
        },

        getEmployeeByCity: async (_, args) => {
            console.log(`Fetching all employees from ${args.city}`)
            const emps = await Employee.find({ city: new RegExp(args.city, 'i') })
            console.log(`matching employees: ${JSON.stringify(emps)}`)
            return emps
        },

        getEmployeeByFirstname: async (_, args) => {
            console.log(`Fetching all employees from ${args.firstname}`)
            const emps = await Employee.find({ firstname: new RegExp(args.firstname, 'i') })
            console.log(`matching employees: ${JSON.stringify(emps)}`)
            return emps
        },

        getEmployeeById: async (_, { id }) => {
            console.log(`Fetching all employees from ${id}`)
            const emps = await Employee.findById(id)
            console.log(`matching employees: ${JSON.stringify(emps)}`)
            return emps
        },
    },

    Mutation: {
        addEmployee: async (_, args) => {
            console.log(`Trying to insert employee with email ${args.email}`)

            let genderToAdd = args.gender

            if (args.gender !== '2SLGBTQQIA+') {
                genderToAdd = args.gender.toLowerCase()
            }

            let newEmp = new Employee({
                firstname: args.firstname,
                lastname: args.lastname,
                email: args.email,
                gender: genderToAdd,
                city: args.gender,
                designation: args.designation,
                salary: args.salary
            })

            return await newEmp.save()
        },

        updateEmployee: async (_, args) => {
            if (!args.id) {
                console.log(`ID not provided`)
                return JSON.stringify({
                    status: false,
                    "message": "Employee ID was not provided"
                })
            }


            let genderToAdd = args.gender

            if (args.gender !== '2SLGBTQQIA+') {
                genderToAdd = args.gender.toLowerCase()
            }

            console.log(`Updating employee ${args.id}`)

            return await Employee.findOneAndUpdate(
                { _id: args.id },
                {
                    set: {
                        firstname: args.firstname,
                        lastname: args.lastname,
                        gender: genderToAdd,
                        city: args.gender,
                        designation: args.designation,
                        salary: args.salary
                    }
                },
                { new: false },
                (err, employee) => {
                    if (err) {
                        console.log(`Could not update employee : ${JSON.stringify(err)}`)
                        return null
                    } else {
                        console.log(`Employee info updated ${JSON.stringify(employee)}`)
                        return employee
                    }
                }
            )


        },

        deleteEmployee: async (_, { id }) => {
            console.log(`Deleting employees from ${id}`)
            const emps = await Employee.findByIdAndDelete(id)
            console.log(`deleted employee: ${JSON.stringify(emps)}`)
            return emps
        },
    }
}