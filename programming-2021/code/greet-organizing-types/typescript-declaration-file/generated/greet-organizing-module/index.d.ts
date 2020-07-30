export = Greeter;

declare class Greeter {
	constructor(message: string);
	log(logSetting: I__logSetting): void;
	alert(alertSetting: I__alertSetting): void;
}

declare namespace Greeter {
	export interface I__logSetting {
		'verbose': boolean;
	}

	export interface I__alertSetting {
		'modal': boolean;
		'title': string;
	}

}