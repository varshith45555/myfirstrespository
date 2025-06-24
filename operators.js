//1.Arthmetic operators
let a = 10;
let b = 5;
console.log("Arithmetic Operators:");
console.log("a =", a,", b =",b);
let sum = a + b;
let difference = a - b;
let quotient = a / b;
let remainder = a % b;
let exponent = a ** b;
console.log("Arithmetic Operators:");
console.log("Sum:",sum);
console.log("Difference:",difference);
console.log("Quotient:",quotient);
console.log("Remainder:",remainder);
console.log("Exponent:",exponent);
console.log("/n");

//2. Assignment Operators
let x = 10;
x += 5;
x -= 3;
x *= 2;
x /= 4;
x %= 3;
console.log("Assignment Operators:");
console.log("x after assignment:",x);
console.log("/n");

//3.comparison operators
let isEqual = (a == b);
let isStrictEqual = (a === b);
let isNotEqual = (a !== b);
let isGreaterThan = (a > b);
let isLessThan = (a < b);
let isGreaterThanOrEqual = (a >= b);
let isLessThanOrEqual = (a <= b);
console.log("Comparison operators");
console.log("Is Equal", isEqual);
console.log("Is  Strict Equal", isStrictEqual);
console.log("Is not Equal", isNotEqual);
console.log("Is GreaterThan", isGreaterThan);
console.log("Is LessThan", isLessThan);
console.log("Is isGreaterThanOrEqual", isGreaterThsnOrEqual);
console.log("Is LessThaOrEqual", isLessThanOrEqual);
console.log("\n");


//4.logical operators
let andOperator =(a > 0 && b > 0);
let orOperator =(a > 0 || b < 0);
let notOperator = !(a < b);
console.log("Logical Operators");
console.log("AND Operators");
console.log("NOT operators");
console.log("\n");


//5. Bitwise operators
let bitwiseAnd = a & b;
let bitwiseOr = a | b;
let bitwiseXor = a ^ b;
let leftShift = a << 1;
let rightShift = a >> 1;
console.log("Bitwise Operators:");
console.log("BitwiseAnd",bitwiseAnd);
console.log("BitwiseOr",bitwiseOr);
console.log("BitwiseXor",bitwiseXor);
console.log("BitwisenNot",bitwisenNot);
console.log("LeftShift",leftShift);
console.log("Rightshift",leftShift);
console.log("/n");