var Greeter = import ("greet-alias-module");
var greet = Greeter.greet;

function getGreeting() {
    return "howdy";
}
class MyGreeter extends Greeter { }

greet("hello");
greet(getGreeting);
greet(new MyGreeter());
