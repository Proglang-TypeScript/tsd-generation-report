export = Greeter;

declare class Greeter {
	constructor(message: string);
	log(logSetting: Greeter.I__logSetting): void;
	alert(alertSetting: Greeter.I__alertSetting): void;
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