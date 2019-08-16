export interface I__opts {
	'aggregator': undefined;
	'defaultTags': Array<any>;
	'reporter': undefined;
	'apiKey': string;
	'appKey': undefined;
	'agent': undefined;
	'host': string;
	'prefix': string;
	'flushIntervalSeconds': number;
}

export class BufferedMetricsLogger {
	constructor(opts: I__opts);
	// ...
}