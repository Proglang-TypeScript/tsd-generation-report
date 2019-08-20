(function (sandbox) {
	function MyAnalysis() {
		this.invokeFun = function (iid, f, base, args, result) {
			console.log(
				"Function " + f.name + " " +
				"was invoked with params (" +
				Object.values(args).join(',') +
				") and returned " +
				result
			);
		};
	}

	sandbox.analysis = new MyAnalysis();
})(J$);