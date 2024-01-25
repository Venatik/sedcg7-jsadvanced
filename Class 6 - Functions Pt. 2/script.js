// Normal function declaration and if/else statement

function isPositive(number) {
    if (number >= 0) {
        return "Number is positive."
    } else {
        return "Number is negative."
    }
}

console.log(isPositive(5));

// Arrow function with ternary operator

let isPositiveArrow = number => number >= 0 ? "Number is positive." : "Number is negative.";

function isPositiveOrNegative(number) {
    return number >= 0 ? "Number is positive." : "Number is negative.";
}

console.log(isPositiveArrow(10));

console.log(isPositiveOrNegative(-5));

// Storing a function as a variable

let sayHello = function (name) {
    console.log(`Hello ${name}!`);
}

sayHello("Stefan");

// Storing functions in an array

let numberStateFunctions = [
    number => number >= 0 ? "Positive" : "Negative",
    number => number % 2 === 0 ? "Even" : "Odd",
    number => number >= 0 ? number.toString().length : number.toString().length - 1
]

console.log(numberStateFunctions[2](-2555));

// ============== Using functions as arguments ==============

function calculator(calculateFunc, number1, number2) {
    return calculateFunc(number1, number2);
}

function sum(input1, input2) {
    return input1 + input2;
}

function difference(input1, input2) {
    return input1 - input2;
}

let resultAdd = calculator(sum, 120, 20);
console.log(resultAdd);

let resultDiff = calculator(difference, 120, 20);
console.log(resultDiff);

let resultMultiply = calculator(function (number1, number2) {
    return number1 * number2;
}, 2, 10) // self invoked anonymous function as an argument

console.log(resultMultiply);

let resultDivision = calculator((number1, number2) => number1 / number2, 10, 2);
// with arrow function

console.log(resultDivision);

// Function with properties and methods

let sayHello2 = function (name) {
    return `Hi there ${name}.`;
}

sayHello2.defaultName = "Bob";

console.log(sayHello2("Aleksandar"));
console.log(sayHello2(sayHello2.defaultName));

sayHello2.differentGreeting = function (name) {
    return `Hello ${name}.`;
}

console.log(sayHello2.differentGreeting(sayHello2.defaultName));

// Function arguments

function someStrings(str1, str2, str3) {
    console.log(arguments.length);
    console.log(arguments[2]);
}

someStrings("string1", "string2", "string3");

