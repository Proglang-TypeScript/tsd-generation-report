function foo(a) {
	return a.doSomething(
		1,
		2
	);
}

var myObj = {
	doSomething: function (x, y) {
		return x + y;
	}
};

foo(myObj);