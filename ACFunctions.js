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


                                                                              // Example3 of function //

function convertCtoF(number) {
  const convertedF = number * (9/5) + 32;
  return convertedF;
}

console.log(convertCtoF(-30)); // -22
console.log(convertCtoF(-10)); // 14

                                                                              // Example4 of function //

let year = 2024; 

function isLeapYear(year) {
  if (year % 400 === 0) {
    return `${year} is a leap year.`;
  } else if (year % 100 === 0) {
    return `${year} is not a leap year.`;
  } else if (year % 4 === 0) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year.`;
  }
}

const result = isLeapYear(year);
console.log(result);


                                                                              // Example5 "Trucated" //

function truncateString(string, number) {
  
  const trucated = string.slice(0, number);
  
  if (string.length <= number) {
    return string;
  } else if (string.length > number) {
    return (trucated + "...");
  } else {
    return `invalid value`;
  } 
}
  
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));


                                                                              // Example5 "Check ending" //


function confirmEnding(string1, string2) {

  const lastPart = string1.slice(-string2.length);

  if (lastPart === string2) {
    return true
  } else {
    return false
  }
};

console.log(confirmEnding("Bastian", "n"));