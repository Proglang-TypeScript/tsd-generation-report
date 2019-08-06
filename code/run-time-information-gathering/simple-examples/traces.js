function foo(a) {
	var b;

	if (Math.random() < 0.5) {
		b = a.someField;
	} else {
		b = a.otherField;
	}

	return b;
}

var myObj = {
	someField: 1,
	otherField: 2
};

foo(myObj);
foo(myObj);