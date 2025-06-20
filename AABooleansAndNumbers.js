                                                                              // comparasion operators //

//  (>)  greater than
let a = 10; 
let b = 5;
console.log(a > b); // true 
console.log(b > a); // false

//  (<)  less than
console.log(a < b); // false    
console.log(b < a); // true

//  (>=) greater than or equal to
console.log(a >= b); // true
console.log(b >= a); // false   
console.log(a >= 10); // true
console.log(b >= 5); // true

//  (<=) less than or equal to
console.log(a <= b); // false                       
console.log(b <= a); // true


                                                                              // Unary operators //


// (+) changed the current value of strings in a number
const str = "10"; 
const num = +str; // converts string to number
console.log(num); // 10 

// same thing with the simbol (-) but change it to negative
const str2 = "10";
const num2 = -str2; // converts string to negative number   
console.log(num2); // -10

// the simbol (!) is used to change the boolean value and return the opposite value // also called NOT operator
const isTrue = true;
const isTrueChanged = !isTrue; // (!) converts true to false and the value to boolean
console.log(isTrueChanged); // false

// the simbol (~) is used to changed the binary numbers, changes de 1 to 0 and the 0 to 1
const binaryNum = 5; // binary: 101
const changedBinaryNum = ~binaryNum; // changes 101 to 010
console.log(changedBinaryNum); // -6 (in binary: 11111111111111111111111111111010 in 32 bits)

// the (void) operator is used to execute an expression without returning a value
const voidExample = void 0; // returns undefined
console.log(voidExample); // undefined

// the simbol (typeof) is used to know the type of data
const dataType = typeof 10; // returns the type of data
console.log(dataType); // "number"


                                                                              // bitwise operators //


//(&) AND operator return 1 if both bits are 1, otherwise returns 0
const bitA = 5; // binary: 0101
const bitB = 3; // binary: 0011
const andResult = bitA & bitB; // binary: 0001

//(|) OR operator returns 1 if at least one bit is 1, otherwise returns 0
const orResult = bitA | bitB; // binary: 0111
console.log(andResult); // 1

//(^) XOR operator returns 1 if the bits are different, otherwise returns 0
const xorResult = bitA ^ bitB; // binary: 0110
console.log(orResult); // 7

//(~) NOT operator inverts the bits
const notResult = ~bitA; // binary: 1010 (inverts 0101)
console.log(xorResult); // 6

//(<<) Left shift operator shifts bits to the left, filling with 0s
const leftShiftResult = bitA << 1; // binary: 1010 (shifts 0101 to the left)
console.log(notResult); // -6 (inverts 0101 to 1010)

//(>>) Right shift operator shifts bits to the right, filling with the sign bit
const rightShiftResult = bitA >> 1; // binary: 0010 (shifts 0101 to the right)
console.log(leftShiftResult); // 10 


                                                                              // Conditional Statements //

// if statement / only executes the code block if the condition is true /. else statement / executes the code block if the condition is false
const age = 18;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// if-else statement / executes one code block if the condition is true and another code block if the condition is false
const score = 75;   
if (score >= 90) {
    console.log("Excellent!");
} else if (score >= 75) {
    console.log("Good job!");
} else if (score >= 50) {
    console.log("You passed.");
} else {
    console.log("You failed.");
}
//condition ? expressionIfTrue : expressionIfFalse; // This is the basic syntax of the ternary operator
const weather = temperature > 25 ? 'sunny' : 'cool';
console.log(`It's a ${weather} day!`);


                                                                              // Binary Logical Operators//

// (&&) AND operator returns true if both operands are true, otherwise returns false
const isAdult = true;
const hasPermission = true;
const canAccess = isAdult && hasPermission; // true if both are true
console.log(canAccess); // true
// (||) OR operator returns true if at least one operand is true, otherwise returns false
const isMember = false;
const isGuest = true;
const canEnter = isMember || isGuest; // true if at least one is true
console.log(canEnter); // true
// (!) NOT operator returns true if the operand is false, otherwise returns false
const isLoggedIn = false;
const isNotLoggedIn = !isLoggedIn; // true if isLoggedIn is false
console.log(isNotLoggedIn); // true
// (??) Nullish coalescing operator returns the right operand if the left operand is null or undefined, otherwise returns the left operand
const userName = null;
const defaultName = "Guest";
const displayName = userName ?? defaultName; // "Guest" if userName is null or undefined
console.log(displayName); // "Guest" 


                                                                              // Math Object//

// Math.random(); // returns a random number between 0 (inclusive) and 1 (exclusive)
const randomNum = Math.random();
console.log(randomNum); // e.g., 0.123456789

// Math.min(); // returns the smallest of zero or more numbers
const minNum = Math.min(5, 10, 2, 8); // returns the smallest number
console.log(minNum); // 2
// Math.max(); // returns the largest of zero or more numbers
const maxNum = Math.max(5, 10, 2, 8); // returns the largest number 
console.log(maxNum); // 10

// Math.ceil(); // returns the smallest integer greater than or equal to a given number
const ceilNum = Math.ceil(4.2); // rounds up to the nearest integer
console.log(ceilNum); // 5

// Math.floor(); // returns the largest integer less than or equal to a given number
const floorNum = Math.floor(4.8); // rounds down to the nearest integer
console.log(floorNum); // 4

// Math.round(); // returns the nearest integer to a given number
const roundNum = Math.round(4.5); // rounds to the nearest integer
console.log(roundNum); // 5

// Math.trunc(); // returns the integer part of a given number (removes the decimal part)
const truncNum = Math.trunc(4.9); // removes the decimal part
console.log(truncNum); // 4

// Math.sqrt(); // returns the square root of a given number
const sqrtNum = Math.sqrt(16); // calculates the square root
console.log(sqrtNum); // 4
// Math.cbrt(); // returns the cube root of a given number
const cbrtNum = Math.cbrt(27); // calculates the cube root
console.log(cbrtNum); // 3

// Math.abs(); // returns the absolute value of a given number
const absNum = Math.abs(-5); // returns the positive value
console.log(absNum); // 5

// Math.pow(); // returns the result of raising a number to a power
const powNum = Math.pow(2, 3); // calculates 2 raised to the power of 3
console.log(powNum); // 8

// Math in range for example 1 to 100
const minRange = 1;
const maxRange = 100;
const randomInRange = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange; // generates a random number between 1 and 100
console.log(randomInRange); // e.g., 42



                                                                              // NaN Property//

// NaN (Not a Number) is a special value in JavaScript that represents an invalid number
const invalidNumber = "hello" / 2; // division by a string results in NaN
console.log(invalidNumber); // NaN
// NaN is of type number
console.log(typeof NaN); // "number"    
// NaN is not equal to itself
console.log(NaN === NaN); // false
// To check if a value is NaN, use the isNaN() function
console.log(isNaN(invalidNumber)); // true
// To check if a value is a valid number, use the Number.isNaN() function
console.log(Number.isNaN(invalidNumber)); // true
// NaN can also result from operations with undefined or null
const undefinedValue = undefined + 5; // adding undefined results in NaN
console.log(undefinedValue); // NaN



                                                                              // parseFloat() and parseInt() //

// These functions are used to convert strings to numbers, Int is when you want the integer number and Float is when you want the decimal number.

// parseFloat() converts a string to a floating-point number
const floatString = "3.14";
const parsedFloat = parseFloat(floatString); // converts string to float
console.log(parsedFloat); // 3.14

// parseInt() converts a string to an integer
const intString = "42";
const parsedInt = parseInt(intString); // converts string to integer
console.log(parsedInt); // 42
// parseInt() can also take a second argument for the radix (base)
const hexString = "0xFF";
const parsedHex = parseInt(hexString, 16); // converts hex string to integer
console.log(parsedHex); // 255



                                                                              // .toFixed() //

// Is used to format a number to a fixed number of decimal places, but let the number as a string.

const number = 3.1415967;
const fixedNumber = number.toFixed(2); // formats to 2 decimal places
console.log(fixedNumber); // "3.14"

// so if you want 5 decimal places
const fixedNumberFive = number.toFixed(5); // formats to 5 decimal places
console.log(fixedNumberFive); // "3.14159"

// if you have it void (0) it will return the number without decimal places
const fixedNumberVoid = number.toFixed(0); // formats to 0 decimal places
console.log(fixedNumberVoid); // "3"
// Note: .toFixed() returns a string, so if you need it as a number, you can convert it back using parseFloat()
const fixedNumberAsFloat = parseFloat(fixedNumber); // converts back to number
console.log(fixedNumberAsFloat); // 3.14

