let x = null;
typeof x; // 'object'
x instanceof Object; // false

let f = function() {};
typeof f; // 'function'
f instanceof Function; // true
f instanceof Object; // true

let a = [1, 2, 3];
typeof a; // 'object'
a instanceof Array; // true
a instanceof Object; // true