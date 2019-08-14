function f(a) {
	return "The total amount is: " + a;
}

f("unknown"); // The total amount is: unknown
f(123.45); // The total amount is: 123.45

let o = {
	val: 123.45
};

o.valueOf = function() {
	return this.val;
};

f(o); // The total amount is: 123.45
