const Employee = require('./Employee');



class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    // Method which prints all of the stats for a character
    printStats() {
        console.log(`The Engineer's name is ${this.name}.`);
        console.log(`The Engineer's id is ${this.id}.`);
        console.log(`The best way to contact ${this.name} is ${this.email}.`);
        console.log(`${this.name}'s GitHub name is ${this.github}.`);
        console.log('------------');
    }


    getRole() {
        return "Engineer";
    }
    // return the employee github 
    getGithub() {
        return this.github;

        //     //Method which determines whether or not a character's "email" are less then zero
        //     //Returns true or false depending upon the outcome
        //     describe() {
        //         if (this.email <= 0) {
        //             // console.log(`${this.name} Welcome aboard!`);
        //             // return true;
        //         }
        //         // return true;
        //     }


        //     //Method which takes in a second object and decreases their "email" by this character's id
        //     idEngineer() {

        //     }
        // }
        // // Creates two unique characters using the "character" constructor
        // const John = new Engineer('John', 'J2', 'John@email.com', 'JohnGitHub');
        // // const John = new Engineer('John', 002, 'John@email.com');

        // // This keeps track of whose turn it is
        // let JohnTurn = true;

        // John.printStats();
        // John.printStats();
        // // John.printStats();

        // const turnInterval = setInterval(() => {
        //     // If either character is not alive, end the game
        //     if (!John.describe()) {
        //         clearInterval(turnInterval);
        //         console.log('Welcome Aboard!');
        //     } else if (JohnTurn) {
        //         John.idEngineer(John);
        //         John.printStats();
        //     } else {
        //         //   return;
        //     }

        //     // Switch turns
        //     JohnTurn = !JohnTurn;
        // }, 1500);
    }
}
module.exports = Engineer;
