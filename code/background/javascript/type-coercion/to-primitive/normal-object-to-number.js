let a = {};
a.valueOf = function () {
	return 12345;
}

let n = Number(a); // 12345