const Employee = require("./employee")

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    // switch role to engineer
    getRole() {
        return "Engineer";
    }
}

// to be exported 
module.exports = Engineer; 