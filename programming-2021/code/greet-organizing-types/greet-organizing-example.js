var Greeter = require("./greet-organizing-module");

var g = new Greeter("Hello");
g.log({ verbose: true });
g.alert({ modal: false, title: "Current Greeting" });