"0" == false; // true
true == "1.00"; // true
false == "    \n\r\t     "; // true
false == []; // true
0 == []; // true
 null == undefined; // true 4
"01" < "00100"; // false
[1] + 1; //'11'
[2] == "2"; // true
null + undefined + [1, 2, 3] // 'NaN1,2,3'
"hello world".lenth + 1 // NaN | note 'lenth' instead of 'length'
[1, 15, 20, 100].sort() // [ 1, 100, 15, 20 ]
typeof null; // object
null instanceof Object; // false