let a1: number = 1;
let b1: number = 2;
let s1 = a1 + b1; // OK. Inferred => s1: number

let a2: string = "hello";
let b2: string = "hello";
let s2 = a2 + b2; // OK. Inferred => s2: string

let a3: string = "hello";
let b3: number = 1234;
let s3 = a3 + b3; // OK. Inferred => s3: string

let a4: number = 1234;
let b4: object = {};
let s4 = a4 + b4; // NOK.

let a5: number = 123;
let b5: boolean = true;
let s5 = a5 + b5; // NOK.

let a6: string = "hello";
let b6: object = {};
let s6 = a6 + b6; // OK. Inferred => s6: string