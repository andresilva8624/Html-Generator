// WHEN I start the application
//THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
const Manager = require('./lib/manager');
const Engineer = require("./lib/engineer");
const Intern = require('./lib/intern');
const inquirer = require("inquirer");
const path = require('path');
const fs = require('fs')

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./src/page-template.js');

const teamMembers = [];
const idArray = [];

function init() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your Manager's name?",
            name: "name",
        },
        {
            type: "input",
            message: "Please enter the employee ID",
            name: "id",
        },
        {
            type: "input",
            message: "Please enter the email address",
            name: "email",
        },
        {
            type: "input",
            message: "Please enter the office number",
            name: "office",
        },
    ])
        .then((response) => {
    
            const newManager = new Manager (response.name, response.id, response.email, response.office)
            teamMembers.push(newManager)
            console.log(teamMembers)
            next()

        }
        )


}

function next() {
    inquirer.prompt([
        {

            type: "list",
            message: "What would you like to do next?",
            name: "next",
            choices: ['Add an engineer', 'Add an intern', 'Finish building the Team']

        },

    ])
        .then((response) => {
            console.log(response.next)

            if (response.next == "Add an engineer") {
                engineer()

            } else if (response.next == "Add an intern") {
                intern()
            } else {
                generateTeam()
            }

        }
        )


}

function engineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your Enginner's name?",
            name: "name",
        },
        {
            type: "input",
            message: "Please enter the engineer's ID",
            name: "id",
        },
        {
            type: "input",
            message: "Please enter the email address",
            name: "email",
        },
        {
            type: "input",
            message: "Please enter the GitHub username",
            name: "username",
        },
    ])
        .then((response) => {
            
            const newEngineer = new Engineer (response.name, response.id, response.email, response.username)
            teamMembers.push(newEngineer)
            console.log(response)
            next()
            // teamMembers.push(engineer);
            // idArray.push(answers.engineerId);
            // createTeam();

        }
        )


}
function intern() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your intern's name?",
            name: "name",
        },
        {
            type: "input",
            message: "Please enter the intern's ID",
            name: "id",
        },
        {
            type: "input",
            message: "Please enter the email address",
            name: "email",
        },
        {
            type: "input",
            message: "Please enter the intern's school",
            name: "intern",
        },
    ])
        .then((response) => {
            console.log(response)
            const newIntern = new Intern (response.name, response.id, response.email, response.intern)
            teamMembers.push(newIntern)
            next()
            // teamMembers.push(intern);
            // idArray.push(answers.internId);
      



        }
        )

}

function generateTeam() {
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR);
      }
      fs.writeFileSync(distPath, render(teamMembers), 'utf-8');
    //   createTeam();
    };
    
      




generateTeam();
init();