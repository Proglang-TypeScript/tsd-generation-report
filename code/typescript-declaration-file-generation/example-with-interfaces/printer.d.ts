export = Printer;

declare function Printer(input: Printer.I__input): void;
declare namespace Printer {
	export interface I__input {
		'firstName': string;
		'lastName': string;
		'streetName': string;
		'houseNumber': string;
	}

}