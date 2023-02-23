

// intern constructor 

class Intern extends Employee {
    constructor (name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;

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
module.exports = intern; 