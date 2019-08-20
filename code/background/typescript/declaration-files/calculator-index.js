module.exports = function () {
	this.sum = function (a, b) {
		if (
			typeof a !== 'number' ||
			typeof b !== 'number'
		) {
			throw new Error("Only numbers are allowed!");
		}

		return a + b;
	};

	this.multiply = function (a, b) {
		return a * b;
	};
};