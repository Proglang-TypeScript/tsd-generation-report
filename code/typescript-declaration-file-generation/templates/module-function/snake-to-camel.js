function snakeToCamel(s) {
	return s.replace(/([-_][a-z])/g, function (group) {
		return group.toUpperCase()
			.replace('-', '')
			.replace('_', '');
	});
}

module.exports = snakeToCamel;