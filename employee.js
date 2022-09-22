class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Method which prints all of the stats for a character
    printStats() {
        console.log(`The Employee's name is ${this.name}.`);
        console.log(`The Employee's id is ${this.id}.`);
        console.log(`${this.name} best way to contact is ${this.email}.`);
        console.log('------------');
    }

    //Method which determines whether or not a character's "email" are less then zero
    //Returns true or false depending upon the outcome
    isEmail() {
        if (this.email <= 0) {
            console.log(`${this.name} Welcome aboard!`);
            return true;
        }
        return true;
    }


//Method which takes in a second object and decreases their "email" by this character's id
idEmployee(Employee){
    console.log(`${this.name} welcomes ${this.name} presenting his ${this.id}`);
    this.email === this.email;
}}
// Creates two unique characters using the "character" constructor
const andre = new Employee('andre', 001, 'andre@email.com');
const john = new Employee('john', 002, 'john@email.com');

// This keeps track of whose turn it is
let andreTurn = true;

andre.printStats();
john.printStats();

const turnInterval = setInterval(() => {
    // If either character is not alive, end the game
    if (!andre.isEmail() || !john.isEmail()) {
        clearInterval(turnInterval);
        console.log('Welcome');
    } else if (andreTurn) {
        andre.idEmployee(andre);
        andre.printStats();
    } else {
      return;
    }

    // Switch turns
    andreTurn = !andreTurn;
}, 2000);
