// WHEN I start the application
//THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

const inquirer = require("inquirer");
// const generateHTML = require('./utils/generateHTML')
const fs = require('fs')

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
            console.log(response)
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
                generateHTML()
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
            console.log(response)
            next()

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
            next()


        }
        )

}

function generateHTML() {
    fs.writeToFile('template.html', template(init, engineer, intern), (err) => {
   if (err) throw err;
   console.log('The file has been saved?');
    }) 
     ;
      }




// generateHTML();
init();