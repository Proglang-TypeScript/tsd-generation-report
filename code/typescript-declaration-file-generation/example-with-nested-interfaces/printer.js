module.exports = function (employee) {
	var s = employee.name.firstName + " " +
		employee.name.lastName + " - " +
		employee.address.streetName + " " +
		employee.address.houseNumber;

	console.log(s);
};