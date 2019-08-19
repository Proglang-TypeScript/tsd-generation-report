function ToString(a) {
	if (isPrimitive(a) === true) {
		// Native JS String conversion if
		// a is a primitive.
		return String(a);
	}

	if (typeof a === "object") {
		let primValue = ToPrimitive(a, String);
		return ToString(primValue);
	}
}