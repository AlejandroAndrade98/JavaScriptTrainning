                                                                              // Data Types //

// Number: Represents both integers and floating-point numbers
let age = 25;
let temperature = 36.5;
console.log(typeof age); // "number"
console.log(typeof temperature); // "number"

// String: A sequence of characters enclosed in quotes
let greeting = "Hello, World!";
console.log(typeof greeting); // "string"

// Boolean: Represents true or false values
let isLoggedIn = true;
console.log(typeof isLoggedIn); // "boolean"

// Undefined: A variable declared but not assigned a value
let city;
console.log(city); // undefined

// Null: A value intentionally set to "no value"
let selectedItem = null;
console.log(selectedItem); // null
console.log(typeof selectedItem); // "object" (quirk in JS)

// Object: A collection of key-value pairs
let pet = {
  name: "Fluffy",
  age: 3,
  type: "dog"
};
console.log(typeof pet); // "object"

// Symbol: Represents a unique, immutable identifier
const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log(sym1 === sym2); // false

// BigInt: Used to represent very large integers
const bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber); // "bigint"


                                                                              // Variables //

// let: Can be reassigned
let cityName = "New York";
cityName = "Los Angeles";
console.log(cityName); // "Los Angeles"

// const: Cannot be reassigned
const PI = 3.1416;
// PI = 3.14; // Error: Assignment to constant variable

// Variable naming conventions:
// - Use camelCase: e.g. cityName
// - Can't start with a number
// - Can't contain spaces or special characters (except _ and $)
// - Should be meaningful and descriptive

                                                                              // Strings and String Immutability //

// Strings are immutable — you can't change them directly
let name = "John";
name = "Jane"; // This is valid (reassignment), but not mutation

// String concatenation using +
let student = "Asad";
let ages = 25;
let info = student + " is " + ages + " years old.";
console.log(info); // "Asad is 25 years old."

// += to append to a string
let message = "Welcome ";
message += "back!";
console.log(message); // "Welcome back!"

// Using concat()
let firstName = "John";
let lastName = "Doe";
let fullName = firstName.concat(" ", lastName);
console.log(fullName); // "John Doe"

                                                                              // console.log and Semicolons //

// Used to log messages to the console
console.log("Hello, World!");

// Semicolons end statements and avoid ambiguity
let number = 42;
let texts = "End of line";
                                                                              // Comments //

// This is a single-line comment

/*
 This is a multi-line comment
 Used to explain or temporarily disable code
*/


                                                                              // Dynamically Typed Language //

// Variables can hold different types at different times
let error = 404; 
error = "Not Found"; // valid in JavaScript


                                                                              // typeof Operator //

// Used to check the type of a value
console.log(typeof 10); // "number"
console.log(typeof true); // "boolean"
console.log(typeof "hello"); // "string"
console.log(typeof null); // "object" (special case)

                                                                              // String Basics //

// Access characters with index
const developer = "Jessica";
console.log(developer[0]); // "J"

// Newline character
const poem = "Roses are red,\nViolets are blue,\nJavaScript is fun.";
console.log(poem);

// Escaping quotes
const statement = "She said, \"Hello!\"";
console.log(statement); // She said, "Hello!"

// Template literals and interpolation
const names = "Jessica";
const greetings = `Hello, ${names}!`;
console.log(greetings); // "Hello, Jessica!"


                                                                              // ASCII and charCodeAt() //

// Get ASCII code
const letter = "A";
console.log(letter.charCodeAt(0)); // 65

// Convert code to character
const char = String.fromCharCode(65);
console.log(char); // "A"

                                                                              // Common String Methods //

// indexOf()
const text = "The quick brown fox";
console.log(text.indexOf("fox")); // 16
console.log(text.indexOf("cat")); // -1

// includes()
console.log(text.includes("fox")); // true
console.log(text.includes("cat")); // false

// slice()
console.log(text.slice(0, 3)); // "The"
console.log(text.slice(4, 9)); // "quick"

// toUpperCase() and toLowerCase()
const word = "JavaScript";
console.log(word.toUpperCase()); // "JAVASCRIPT"
console.log(word.toLowerCase()); // "javascript"

// replace()
const sentence = "I like cats";
console.log(sentence.replace("cats", "dogs")); // "I like dogs"

// repeat()
const hi = "Hello";
console.log(hi.repeat(3)); // "HelloHelloHello"

// trim(), trimStart(), trimEnd()
const spaced = "  Hello  ";
console.log(spaced.trim());      // "Hello"
console.log(spaced.trimStart()); // "Hello  "
console.log(spaced.trimEnd());   // "  Hello"


                                                                              // prompt() Method //

// Used to get input from the user via a dialog
const answer = window.prompt("What's your favorite animal?");
console.log(answer); // depends on what user types
