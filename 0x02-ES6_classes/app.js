// testing something here yoh

class App {
    constructor(name) {
        console.log(new.target.arguments);
        this.name = name;
    }
}

const person = new App("JOHN");