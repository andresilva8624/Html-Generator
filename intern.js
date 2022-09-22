class Intern {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }

    // Method which prints all of the stats for a character
    printStats() {
        console.log(`The Intern's name is ${this.name}.`);
        console.log(`The Intern's id is ${this.id}.`);
        console.log(`The best way to contact ${this.name} is ${this.email}.`);
        console.log(`${this.name} goes to ${this.school} school.`);
        console.log('------------');
    }

    //Method which determines whether or not a character's "email" are less then zero
    //Returns true or false depending upon the outcome
    describe() {
        if (this.email <= 0) {
            // console.log(`${this.name} Welcome aboard!`);
            // return true;
        }
        // return true;
    }


    //Method which takes in a second object and decreases their "email" by this character's id
    idIntern() {

    }
}
// Creates two unique characters using the "character" constructor
const Peter = new Intern('Peter', 'P3', 'Peter@email.com', 'UCLA');
// const John = new Intern('John', 002, 'John@email.com');

// This keeps track of whose turn it is
let PeterTurn = true;

Peter.printStats();
// John.printStats();

const turnInterval = setInterval(() => {
    // If either character is not alive, end the game
    if (!Peter.describe()) {
        clearInterval(turnInterval);
        console.log('Welcome Aboard!');
    } else if (PeterTurn) {
        Peter.idIntern(Peter);
        Peter.printStats();
    } else {
        //   return;
    }

    // Switch turns
    PeterTurn = !PeterTurn;
}, 1500);
