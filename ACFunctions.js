                                                                              // The functions //

// Functions are used to perform specific tasks, and they can be reused throughout the code.
// Functions can take parameters and return values, allowing for flexible and dynamic behavior.
function greet(name) {
    return `Hello, ${name}!`;
}
// Example usage of the greet function
console.log(greet("Alice")); // "Hello, Alice!"
// Functions can also be defined using arrow syntax for a more concise representation.
const add = (a, b) => a + b;
// Example usage of the add function
console.log(add(5, 3)); // 8    
// Functions can be stored in variables, passed as arguments, and returned from other functions.
function executeFunction(fn, value) {
    return fn(value);
}


                                                                              // Arrow functions //

// Arrow functions provide a more concise syntax for writing functions.

