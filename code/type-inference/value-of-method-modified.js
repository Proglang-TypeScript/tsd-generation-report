/**
 * valueOf() method of Array object is modified
 * and returns the sum of its elements.
 * 
 * [1, 2, 3].valueOf() === 6 (1 + 2 + 3)
 */

Array.prototype.valueOf = function() {
	return this.reduce(function(previousValue, currentValue) {
		return previousValue + currentValue;
	});
}

let a = [1, 2, 3]; // a.valueOf() = 6
let b = [4, 5, 6]; // b.valueOf() = 15

let c = a + b;

// c === 21