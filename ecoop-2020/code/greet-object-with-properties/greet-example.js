var myLib = require("./greet-module");

var result = myLib.makeGreeting("hello, world");
console.log("The computed greeting is:" + result);

var count = myLib.numberOfGreetings;
