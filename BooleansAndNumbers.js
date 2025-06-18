                                        //comparasion operators

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

                                        //Unary operators

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

                                        //bitwise operators

