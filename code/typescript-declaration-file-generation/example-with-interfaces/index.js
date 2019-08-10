var printer = require("./printer");

var o = {
	firstName: "John",
	lastName: "Doe",
	streetName: "Some Street",
	houseNumber: "1234"
};

printer(o);

// Prints: 'John Doe - Some Street 1234'