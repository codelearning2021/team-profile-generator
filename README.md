# Team Profile Generator 


## Description 
This application generates a team profile based on user input using the Inquirer module from Node.js. It displays the information on a newly created html page with a corresponding CSS style sheet. The purpose of this repo is to exercise the implementation of Object Oriented Programming and Jest utilized Test Driven Development. 
 
## Table of Contents
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Installation](#installation)
* [Usage](#usage)
* [Screencast](screencast)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Installation 
First, clone the Github repository. Node will need to be downloaded if it has not been installed. Jest can be used for installation.

## Usage 
Use inquirer from your command line to answer questions about your project. Run "node index.js" to get started on building your page.

<img src="https://github.com/codelearning2021/team-profile-generator/blob/main/Assets/generatedHTMLteampage.png">

## Screencast
Download here:
https://github.com/codelearning2021/team-profile-generator/raw/main/Assets/Team%20Profile%20Generator.mp4



## Tests
From the repo folder, type `npm test` to run Jest for tests on constructors. 

## License 
This project is licensed under MIT
![Github licence](http://img.shields.io/badge/license-MIT-blue.svg)

## Questions
Contact me via my github: https://github.com/codelearning2021