const Employee = require("./employee")

// intern constructor 

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);

        this.school = school
    }

    getSchool () {
        return this.school;
    }

     // switch role to engineer
    getRole () {
        return "Intern";
    }
}



// to be exported 
module.exports = Intern; 