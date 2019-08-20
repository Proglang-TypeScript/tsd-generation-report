export = Calculator;

declare class Calculator {
	constructor();
	sum(
		a: number | string,
		b: number | string): number;

	multiply(a: number, b: number): number;
}

declare namespace Calculator {
}