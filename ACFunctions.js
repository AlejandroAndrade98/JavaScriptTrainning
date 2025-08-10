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

console.log(word.toUpperCase()); // "JAVASCRIPT"
console.log(word.toLowerCase()); // "javascript"    
console.log(executeFunction(greet, "Bob")); // "Hello, Bob!"
console.log(executeFunction(add, 10)); // 10


                                                                              // Booleans //

// Booleans represent true or false values, often used in conditional statements.

function booWho(value) {
  return typeof value === "boolean";
}

                                                                              // Example of function //

const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
  if(creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {
    return "You qualify for a duplex, condo, and car loan."
  } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
    return "You qualify for a condo and car loan."
  } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
    return "You qualify for a car loan."
  } else {
    return "You don't qualify for any loans."
  }
}

console.log(getLoanMessage(70000, 720)); // "You qualify for a duplex, condo, and car loan."
console.log(getLoanMessage(50000, 690)); // "You qualify for a condo and car loan."
console.log(getLoanMessage(35000, 660)); // "You qualify for a car loan."
console.log(getLoanMessage(25000, 640)); // "You don't qualify for any loans."



                                                                              // Example2 of function //

let email = "alejandro@hotmail.com"

function maskEmail(email) {
  const atIndex = email.indexOf("@");

  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  const limits = Math.max(0, username.length - 2);
  const changeToSimbols = "*".repeat(limits);

  return username[0] + changeToSimbols + username[username.length -1] + domain;
}

console.log(maskEmail("apple.pie@example.com"));
console.log(maskEmail("freecodecamp@example.com"));
console.log(maskEmail("info@test.dev"));
console.log(maskEmail("user@domain.org"));
console.log(maskEmail(email))