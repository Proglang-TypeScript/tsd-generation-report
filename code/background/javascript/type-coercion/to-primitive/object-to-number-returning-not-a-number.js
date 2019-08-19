let a = {};
a.valueOf = function() {
	// valueOf() returning undefined, i.e. not a Number.
	return undefined;
}

let n = Number(a);
// NaN. ToPrimitive(a, Number) returns undefined,
// and isNaN(Number(undefined)) === true.

a.valueOf = function() {
	// valueOf() is not returning a primitive.
	// ToPrimitive(a, Number) ends up calling a.toString() instead.
	return {};
}

a.toString = function() { return "123"; }
// toString() returns a String that can
// be converted into a Number.

n = Number(a); // 123