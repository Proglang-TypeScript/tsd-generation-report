import Calculator from './calculator';

let c = new Calculator();

console.log("Computing [(1+2) * (3+4)] ...")

let r = c.multiply(c.sum(1, 2), c.sum(3, 4));

console.log("The result is: " + r);