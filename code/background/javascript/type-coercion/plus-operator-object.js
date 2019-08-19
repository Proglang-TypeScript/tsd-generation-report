let a = {};
a.valueOf = function () {
	return "1";
};

let r = a + 1; // "11"

a = {};
a.toString = function() {
	return "2";
}

r = a + 1 // "21"

let myDate = new Date();
r = myDate + 123;
// "Mon mm DD 2019 HH:MM:SS GMT+0200 (Central European Summer Time)123"