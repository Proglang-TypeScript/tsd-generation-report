{
	/* 
		Unique id given to the function when first invoked.
	*/
	"functionId": "functionId_XXX",

	/*
		Name of the function or method as indicated in the code:
			- function foo(...) {}
			- {
				foo: function(...) {} 
			}
	*/
	"functionName": "foo",

	/*
		Boolean indicating whether the function is being used as a constructor: 'new foo()'.
	*/
	"isConstructor": false, 

	/*
		Map containing entities of type 'ArgumentContainer'
	*/
	"args": {},

	/*
		Array of objects containing the type and the traceId for that specific return value.
	*/
	"returnTypeOfs": [
		{
			"typeOf": "number",
			"traceId": "trace__1"
		}
	],

	/*
		Name of the module to which the function belongs to:
			const myModule = require('myModule');
			myModule.foo()
	*/
	"requiredModule": "myModule",

	/*
		Boolean indicating whether the function is the actual function being exported by the module:

		true:
			const foo = require('myModule');
			foo()
		
		false:
			const myModule = require('myModule');
			myModule.foo()
	*/
	"isExported": true
}