function ToUpperCase(a) {
	this.run = function () {
		return a.toUpperCase();
	};

	return this.run(a);
}

ToUpperCase("hello");
// "HELLO"


var t = new ToUpperCase("world");
t.run();
// "WORLD"