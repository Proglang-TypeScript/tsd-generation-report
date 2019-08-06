function foo(a) {
	var b = a.x;

	if (b.y) {
		// ...
	}
}

var myObj = {
	x: {
		y: "bar"
	}
};

foo(myObj);