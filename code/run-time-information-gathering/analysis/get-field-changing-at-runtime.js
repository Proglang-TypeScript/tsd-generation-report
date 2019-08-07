function foo(a) {
	/**
	 * Interaction saved with returnTypeOf: string
	 */
	if (a.bar) {
		// ...
	}

	a.bar = 123;

	/**
	 * Interaction saved with returnTypeOf: number
	 */
	if (a.bar) {
		// ...
	}
}

foo({
	bar: "hello"
});