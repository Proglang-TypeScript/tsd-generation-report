var Greeter = require("./greet-classes-module");

const myGreeter = new Greeter("hello, world");
myGreeter.greeting = "howdy";
myGreeter.showGreeting();

// class SpecialGreeter extends Greeter {
//     constructor() {
//         super("Very special greetings");
//     }
// }

// let specialGreeter = new SpecialGreeter();
// specialGreeter.showGreeting();