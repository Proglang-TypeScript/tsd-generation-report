function f(a, b) {
	console.log("I am a function being called with: " + a + " and " + b);
}

f(100, 200); // 'I am a function being called with: 100 and 200'
f instanceof Function; // true
f instanceof Object; // true

let g = new Function(
	"a",
	"console.log('This is the built-in Function Object being called with: ' + a)"
)

g(456); // 'This is the built-in Function Object being called with: 456'
g instanceof Function; // true
g instanceof Object; // true

let a = [1, 2, 3];
a.push(4); // [1, 2, 3, 4];
a instanceof Array; // true
a instanceof Object; // true

let b = new Array(1, 2, 3);
b.push(4); // [1, 2, 3, 4];
b instanceof Array; // true
b instanceof Object; // true