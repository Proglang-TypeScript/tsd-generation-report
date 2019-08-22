class Greeter {
	name: string;

	constructor(name: string) {
		this.name = name
	}

	public sayHello() {
		console.log("Hello " + this.name + "!");
	}

	private sayHelloPrivate() {
		console.log("Hello " + this.name + "(private) !");
	}
}

let g = new Greeter("John");
g.sayHello();