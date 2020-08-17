export = Greet;

declare class Greet {
	constructor();
}

declare namespace Greet {
	export interface I__init {
		'greeting': string;
	}

export function greetAliasModule(init: string | Function | Greet | Greet.I__init): void;
}