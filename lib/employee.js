// employee constructor 

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // get name
    getName () {
        return this.name;
    }

    // get ID
    getId () {
        return this.id;
    }   

    // get email
    getEmail () {
        return this.email;
    }

    // get employee type 
    getRole () {
        return 'Employee'; 
    }
};

// to be exported 
module.exports = Employee; 