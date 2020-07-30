export = GreetSettingsModule;

declare function GreetSettingsModule(settings: GreetSettingsModule.I__settings): void;
declare namespace GreetSettingsModule {
	export interface I__settings {
		'greeting': string;
		'duration': number | undefined;
		'color': undefined | string;
	}

}