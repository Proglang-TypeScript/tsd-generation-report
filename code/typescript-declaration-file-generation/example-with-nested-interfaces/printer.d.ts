export = Printer;

declare function Printer(employee: Printer.I__employee): void;
declare namespace Printer {
	export interface I__name {
		'firstName': string;
		'lastName': string;
	}

	export interface I__address {
		'streetName': string;
		'houseNumber': string;
	}

	export interface I__employee {
		'name': I__name;
		'address': I__address;
	}

}