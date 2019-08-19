function AdditionOperator() {
	this.apply = function (a, b) {
		let aPrim = ToPrimitive(a); // No preferredType is chosen
		let bPrim = ToPrimitive(b); // No preferredType is chosen

		if (
			typeof aPrim === "string" ||
			typeof bPrim === "string"
		) {
			return ToString(aPrim).concat(ToString(bPrim));
		}

		return ToNumber(a) + ToNumber(b);
	}
}