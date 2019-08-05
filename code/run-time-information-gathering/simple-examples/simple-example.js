function foo(a, b) {
	return a.bar + b;
}

foo(
	{
		bar: 1
	},
	2
); // -> 3