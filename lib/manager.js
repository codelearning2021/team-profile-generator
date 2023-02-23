// employee constructor 

class Manager extends Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }




class Manager extends Employee {
    constructor (name, id, email, number) {
        super (name, id, email);

        this.officeNumber = officeNumber; 
    }



     // switch role to engineer
    getRole () {
        return "Manager";
    }
}

// to be exported 
module.exports = Manager; 