function foo(a) {
	return a.bar + a.baz;
}

foo(
	{
		bar: "hello",
		baz: "world"
	}
); 