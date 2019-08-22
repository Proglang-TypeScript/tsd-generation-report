var Greeter = /** @class */ (function () {
	function Greeter(name) {
		this.name = name;
	}
	Greeter.prototype.sayHello = function () {
		console.log("Hello " + this.name + "!");
	};
	Greeter.prototype.sayHelloPrivate = function () {
		console.log("Hello " + this.name + "(private) !");
	};
	return Greeter;
}());
var g = new Greeter("John");
g.sayHello();