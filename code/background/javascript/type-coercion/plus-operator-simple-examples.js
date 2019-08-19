1 + 1 // 2
1 + true // 2
1 + false // 1
true + false // 1
1 + undefined // NaN
1 + null // 1
null + undefined // NaN
"Hello" + "World" // "HelloWorld"
1 + "1" // "11"
"1" + true // "1true"
"1" + undefined // "1undefined"
"1" + null // "1null"

let a = {};
a.valueOf = function () {
	return 1;
};

let r = a + 1; // 2