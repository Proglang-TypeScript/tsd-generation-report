function BufferedMetricsLogger(opts) {
	this.aggregator = opts.aggregator || new Aggregator(opts.defaultTags);
	this.reporter = opts.reporter || new DataDogReporter(opts.apiKey, opts.appKey, opts.agent);
	this.host = opts.host;
	this.prefix = opts.prefix || '';
	this.flushIntervalSeconds = opts.flushIntervalSeconds;

	// ...
	// ...
}