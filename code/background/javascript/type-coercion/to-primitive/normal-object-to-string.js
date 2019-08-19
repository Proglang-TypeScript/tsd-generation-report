let a = {};
a.toString = function () {
	return "I am a string!";
}
let s = String(a); // 'I am a string!'