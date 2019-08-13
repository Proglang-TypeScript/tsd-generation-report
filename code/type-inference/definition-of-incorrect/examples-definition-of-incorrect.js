let a = "hello world".indexOf(
	"hello",
	0,
	true,
	null,
	undefined,
	{},
	[]
); // To many parameters for String.indexOf()

let b = {
	x: "One",
	x: "Two"
}; // Duplicated property "x". ==> b.x === "Two"

let c = "MyString".lenth;
// "lenth" instead of "length". ===> c === undefined.