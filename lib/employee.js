
class Employee {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github - github;
    }


    getName() {

        return this.name;
    }


    getId() {

        return this.id;
    }


    getEmail() {

        return this.email;
    }
    getGuithub() {

        return this.github;
    }


    getRole() {
        return "Employee";
    }

    printInfo() {
        console.log(`The Employee's name is: ${this.name}`)
        console.log(`The Employee's ID is: ${this.id}`)
        console.log(`The best way to contact ${this.name} is ${this.email}.`);
        console.log(`${this.name}'s GitHub name is ${this.github}.`);
        console.log('------------');
    }
}

module.exports = Employee;