const Greet = require("./greet-alias-module");
const greet = Greet.greet;

function getGreeting() {
    return "howdy";
}
class MyGreeter extends Greet { }

greet("hello");
greet(getGreeting);
greet(new MyGreeter());