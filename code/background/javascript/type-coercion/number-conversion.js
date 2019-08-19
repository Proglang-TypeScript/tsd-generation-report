Number(undefined); // NaN

Number(null); // 0

Number(true); // 1
Number(false); // 0

Number("123"); // 123
Number("\n\n     -123.45     \t\t"); // -123.45

Number("123abc"); // NaN