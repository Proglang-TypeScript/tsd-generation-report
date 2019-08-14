// @flow

function f(a, b) { 
	return a + b;
}

f(123, 456);
f("123", "456");
f(123, "456");
f("123", 456);
// f(true, "hello"); -> ERROR
// f(true, 1); -> ERROR
// f(12, {}); -> ERROR
// f({}, {}); -> ERROR
// f([], []); -> ERROR
// f([1], [2]); -> ERROR
// f([1, 2], [3, 4]); -> ERROR
