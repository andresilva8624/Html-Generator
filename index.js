// WHEN I start the application
//THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

const inquirer = require("inquirer");

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
            console.log(response)




        }
        )


}


init()