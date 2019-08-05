function foo(a) {
	if (a.x) {
		// ...
	}

	bar(a);
}

function bar(a) {
	if (a.y) {
		// ...
	}
}

foo({
	x: 200,
	y: 300
});