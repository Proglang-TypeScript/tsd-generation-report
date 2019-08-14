function f(a, b) {
	return a + b;
}

f(123, 456);
f("123", "456");

// f(123, "456");
/* 	Infernu Error:
 *  --------------
 *  Failed unifying:
         ((Number,String) -> ei)
     With:
         ((ek,ek) -> ek)
     Because:
     Failed unifying:
         ek
     With:
         String
     Because:
     Failed unifying:
         Number
     With:
         String 
*/

// f("123", 456); // -> Error
// f(12, {}); // -> Error
// f({}, {}); // -> Error
// f([], []); // -> Error
// f([1], [2]); // -> Error
// f([1, 2], [3, 4]); // -> Error