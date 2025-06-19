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
