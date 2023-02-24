// Declare variables and requre locations

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

// node
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// HTML
const generateHTML = require('./src/generateHTML');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require("./src/te

function profileLaunch () 
{
    function addEmployee() {
        inquirer.prompt([{
        type: "list",
        message: "What type of employee would you like to add to your team?",
        name: "addEmployeePrompt",
        choices: ["Manager", "Engineer", "Intern", "No other team members are needed."]}
    }]).then(function (userInput) {
        if (userInput.addEmployee) = "Manager"
        {
            addManager()
        }
        else if (userInput.addEmployee) = "Intern"
        {
            addIntern()
        }
        else if (userInput.addEmployee) = "Engineer"
        {
            addEngineer
        }
        else 
        {
            buildTeam
        }
    }




        
    function addManager() {
        inquirer.prompt ([
            {
      type: "input",
      name: "managerName",
      message: "Please input the manager's name?"
    },

    {
      type: "input",
      name: "managerId",
      message: "Please input the manager's employee ID number?"
    },

    {
      type: "input",
      name: "managerEmail",
      message: "Please input the manager's email address?"
    },

    {
      type: "input",
      name: "managerOfficeNumber",
      message: "Please input the manager's office number"
    }
]).then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    teamArray.push(manager);
    createTeam();
  });



    function addEngineer() {
        inquirer.prompt ([
            {
                type: "input",
                name: "engineerName",
                message: "Please input engineer's name"
              },
        
              {
                type: "input",
                name: "engineerId",
                message: "Please input the engineer's employee ID number?" 
              },
        
              {
                type: "input",
                name: "engineerEmail",
                message: "Please input the engineer's email address?"
              },
        
              {
                type: "input",
                name: "engineerGithub",
                message: "Please input the engineer's GitHub username?"
              }

]).then(answers => {
    const Engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerSchool);
    teamArray.push(engineer);
    makeTeam();
  });

    function addIntern() {
        inquirer.prompt ([
            {
                type: "input",
                name: "internName",
                message: "Please input the intern's name"
              },
        
              {
                type: "input",
                name: "internId",
                message: "Please input the intern's employee ID number" 
              },
        
              {
                type: "input",
                name: "internEmail",
                message: "WPlease input the intern's email address"
              },
        
              {
                type: "input",
                name: "internSchool",
                message: "Please input the intern's current or former school"
              }
            ]).then(answers => {
                const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
                teamArray.push(intern);
                makeTeam();
              });
    }

function buildTeam () {
    console.log("Congratulations, your team has been created!")

    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")

}

makeTeam();

}

runApp();

profileLaunch();

// GIVEN a command-line application that accepts user input

// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// {
//     type: "",
//     name: "",
//     message: ""
//   },

// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address

// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated