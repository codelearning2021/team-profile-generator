// Declare variables and requre locations

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

// node
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// HTML

const generateTeam = require("./src/teamtemplate");

const teamArray = []

makeTeam()

function makeTeam() {
  inquirer.prompt([
    {
      type: "list",
      message: "What type of employee would you like to add to your team?",
      name: "addEmployeePrompt",
      choices: ["Manager", "Engineer", "Intern", "No other team members are needed."]
    }
  ]).then(function (userInput) {
    if (userInput.addEmployeePrompt === "Manager") {
      addManager()
    }
    else if (userInput.addEmployeePrompt === "Intern") {
      addIntern()
    }
    else if (userInput.addEmployeePrompt === "Engineer") {
      addEngineer()
    }
    else {
      buildTeam()
    }
  })
}

function addManager() {
  inquirer.prompt([
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
    console.log(teamArray)
    makeTeam();
  });
}

function addEngineer() {
  inquirer.prompt([
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
    const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
    teamArray.push(engineer);
    makeTeam();
  })
}

function addIntern() {
  inquirer.prompt([
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

function buildTeam() {
  fs.writeFileSync("team.html", generateTeam(teamArray), (err) => {
    if (err) throw err;
    console.log("Congratulations, your team has been created!")
  })
}
