let n = 123;
typeof n === 'number'; // true

/**
 * The value of n is converted into the built-in Number object
 * with 'new Number(n)'. The method 'toExponential()' is invoked
 * on that hidden object.
 */
n.toExponential(3); // '1.230e+2

let s = "hello world";
typeof s === 'string'; // true
/**
 * The value of s is converted into the built-in Number object
 * with 'new String(s)'. The method 'toUpperCase()' is invoked
 * on that hidden object.
 */
s.toUpperCase(); // 'HELLO WORLD'