let a = {};
a.toString = function () {
	// toString() returning a Boolean, i.e. not a String.
	return true;
}

let s = String(a);
// 'true'
// ToPrimitive(a, String) returns the boolean value true.

a.toString = function () {
	// toString() is not returning a primitive.
	// ToPrimitive(a, String) ends up calling a.valueOf() instead.
	return {};
}

a.valueOf = function () { return undefined; }

s = String(a); // 'undefined'