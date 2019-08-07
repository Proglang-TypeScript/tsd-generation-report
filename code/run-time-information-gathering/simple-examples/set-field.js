function foo(a) {
	// ...

	a.otherField = 2;

	// ...

	return a;
}

foo({
	someField: 1
});