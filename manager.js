class Manager {
    constructor(name, id, email, office) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
    }

    // Method which prints all of the stats for a character
    printStats() {
        console.log(`The Manager's name is ${this.name}.`);
        console.log(`The Manager's id is ${this.id}.`);
        console.log(`The best way to contact ${this.name} is ${this.email}.`);
        console.log(`${this.name}'s Office number is ${this.office}.`);
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
    idManager() {

    }
}
// Creates two unique characters using the "character" constructor
const Andre = new Manager('Andre', 'A1', 'Andre@email.com', '1432');
// const John = new Manager('John', 002, 'John@email.com');

// This keeps track of whose turn it is
let AndreTurn = true;

Andre.printStats();
// John.printStats();

const turnInterval = setInterval(() => {
    // If either character is not alive, end the game
    if (!Andre.describe()) {
        clearInterval(turnInterval);
        console.log('Welcome Aboard!');
    } else if (AndreTurn) {
        Andre.idManager(Andre);
        Andre.printStats();
    } else {
        //   return;
    }

    // Switch turns
    AndreTurn = !AndreTurn;
}, 1500);
