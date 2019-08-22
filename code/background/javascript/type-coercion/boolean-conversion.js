// FALSE:
Boolean(undefined); // false
Boolean(null); // false
Boolean(0); // false
Boolean(NaN); // false
Boolean(""); // false

// TRUE:
Boolean(-123.45); // true
Boolean(" "); // true
Boolean(" a "); // true
Boolean([]); // true
Boolean(new Date()); // true
Boolean({}); // true