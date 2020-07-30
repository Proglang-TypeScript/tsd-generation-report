export = Greet;

declare class Greet {
	constructor();
}

declare namespace Greet {
	export interface I__init {
		'greeting': string;
	}

export function greetAliasModule(init: string): void;
export function greetAliasModule(init: Function): void;
export function greetAliasModule(init: Greet|Greet.I__init): void;
}