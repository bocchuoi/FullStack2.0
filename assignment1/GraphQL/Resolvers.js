const empModel = require("../models/EmployeeModel")
const userModel = require("../models/UserModel")


const resolvers = {
    Query: {
        async getAllEmployees() {
            const employees = await empModel.find()
            return employees
        },

        async login(parent, args) {
            const user = await userModel.findOne({username:args.username})
            if (user && user.password === args.password) {
                return "Logged in"
            }
            else {
                return "You shall not pass!"
            }
        },

        async getEmployee(parent, args) {
            const emp = await empModel.findOne({_id:args.eid})
            return emp
        }
    },

    Mutation: {
        async signup(parent, args) {
            try {
                const newUser = new userModel({username:args.username, password:args.password, email:args.email})
                await newUser.save()
                return `Account ${args.username} Registered`
            }
            catch(e) {
                console.log(e)
                return "Account was not registered. Please check error log!"
            }


        },
        async addEmployee(parent, args) {
            try {
                const newEmp = empModel({firstName: args.firstName, lastName: args.lastName, email:args.email, gender:args.gender, salary:args.salary})
                await newEmp.save()
                return `The employee ${args.firstName} ${args.lastName} is added`

            }
            catch(e) {
                console.log(e)
                return "Employee was not added. Please check error log!"
            }
        },
        async updateEmployee(parent, args) {
            try {
                const updatedEmp = await empModel.findByIdAndUpdate(args.eid, {firstName: args.firstName, lastName: args.lastName, email:args.email, gender:args.gender, salary:args.salary})
                if (updatedEmp) {
                    const nb = await updatedEmp.save()
                    return `The employee ${args.firstName} ${args.lastName} is updated`
                }
                else {
                    return `Couldn't find the employee with ${args.eid} id`
                }
        
            } catch (error) {
                console.log(e)
                return "Employee was not updated. Please check error log!"
            }
        },
        async deleteEmployee(parent, args) {
            try {
                const deletedEmp = await empModel.findByIdAndDelete(args.eid)
                if (deletedEmp) {
                    return `Deleted employee with ${args.eid} id`
                }
                else {
                    return `Couldn't find the employee with ${args.eid} id`
                }
            } catch (e) {
                console.log(e)
                return "Employee was not deleted. Please check error log!"
            }
        }
    }
}

module.exports = resolvers