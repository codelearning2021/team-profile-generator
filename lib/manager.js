// employee constructor 
const { default: inquirer } = require("inquirer");
const Employee = require("./employee")

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);

        this.officeNumber = officeNumber; 
    }
    // switch role to engineer
    getRole () {
        return "Manager";
    }
    getOfficeNumber () {
        return this.officeNumber;
    }
}



     

// to be exported 
module.exports = Manager; 

