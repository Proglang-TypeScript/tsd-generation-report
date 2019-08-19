function ToNumber(a) {
	if (isPrimitive(a) === true) {
		// Native JS Number conversion if
		// a is a primitive.
		return Number(a);
	}

	if (typeof a === "object") {
		let primValue = ToPrimitive(a, Number);
		return ToNumber(primValue);
	}
}