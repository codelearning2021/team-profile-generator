// engineer constructor 

// class Employee {
//     constructor (name, id, email github) {
//         this.name = name;
//         this.id = id;
//         this.email = email;
//         this.github = github
//     }
    class Engineer extends Employee {
        constructor (name, id, email, github) {
            super (name, id, email);
    
            this.github = github; 
        }
    
        getGithub () {
            return this.github;
        }
    
         // switch role to engineer
        getRole () {
            return "Engineer";
        }
    }

//     // returning name from input
//     getName () {
//         return this.name;
//     }

//     // returning ID from input
//     getId () {
//         return this.id;
//     }   

//     // returning email from input
//     getEmail () {
//         return this.email;
//     }

//     // returning employee type 
//     getRole () {
//         return 'Employee'; 
//     }
// };

// to be exported 
module.exports = Engineer; 