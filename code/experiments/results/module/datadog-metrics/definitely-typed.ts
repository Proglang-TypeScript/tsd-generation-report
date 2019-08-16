export interface LoggerOptions {
	apiKey?: string;
	appKey?: string;
	defaultTags?: string[];
	flushIntervalSeconds?: number;
	host?: string;
	prefix?: string;
}

export class BufferedMetricsLogger {
	constructor(
		options: LoggerOptions
	);
	// ...
}