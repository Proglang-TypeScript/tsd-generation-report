var Greet = require("./greet-alias-module");
var greet = Greet.greet;

function getGreeting() {
    return "howdy";
}

greet("hello");
greet(getGreeting);
greet(new Greet());