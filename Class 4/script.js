// =============  Decalaration of a function =============

let pane = getFullName("Pane", "Manaskov"); // Function hoisting - functions can be called before they're declared
console.log(pane);

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

let bob = getFullName("Bob", "Bobson");
let john = getFullName("John", "Doe");

console.log(bob);
console.log(john);

// ============= Function expressions / Anonymous functions =============

// func1(); Hoisting only works for standard declaration of functions, not on function expressions

let func1 = function () {
    console.log("Hello");
}

func1();

let array = [2, 5, 8, function () {
    return 4 + 2 - 1;
}]

console.log(array);
console.log(array[3]());

// ============= Arrow functions =============

let sayHello = () => console.log("Hello G7");
sayHello();

let someResult = num => num + 10; // 1 parameter doesn't have to be in (), in this case: num
console.log(someResult(10));

let sumFunc = (num1, num2) => num1 + num2;
console.log(sumFunc(2, 5));

let sumFunc2 = (num1, num2) => {
    let result = num1 + num2;
    console.log(`The result is ${result}`);
    return result;
}

sumFunc2(2, 5);


const myObject = {
    message: "Hello G7 from arrow function",
    delayedLog: function () {
        setTimeout(() => {
            console.log(this.message);
        }, 1000);
    }
}

const myObject2 = {
    message: "Hello G7",
    delayedLog: function () {
        setTimeout(function () {
            console.log(this.message);
        }.bind(this), 1000); // without .bind this function doesn't work
    }
}

myObject.delayedLog();
myObject2.delayedLog();

// ============= Self invoked functions (immediately-invoked function expressions (IIFE)) =============

let func = () => {
    let result = 5;
    console.log(result);
}

func(); // regular function call

(() => {
    let result = 5;
    console.log(result);
})(); // self invoked function

(function (num1, num2) {
    console.log(num1 + num2);
})(2, 5);

let result2 = (function (num1, num2) {
    return num1 + num2;
})(10, 5);

console.log(result2);

function sum(num1, num2) {
    console.log(num1 + num2);
}

sum((function sumA(num1, num2) {
    return num1 + num2;
})(10, 10), 15); // 10 and 10 are argument 1, 15 is argument 2

// ============= Scope =============

let x = 6;
x = 5;
// let x = 10;

var y = 10;
var y = 15;
console.log(`Y is ${y}`);

console.log(x);

let ten = 10;

function sumPlusOne(num1, num2) {
    let one = 1; // function scope of sumPlusOne
    one = one + ten;

    console.log(num1 + num2 + one);

    function add5(number) {
        let insideVar = 100; // function scope of add5. Can use from scope of sumPlusOne but not vice versa
        console.log(number + 5);
    }

    add5(one);

    if (one > 0) {
        console.log("We have a value bigger than zero.");
        let random = 22; // scope of if statement
        var randomVar = 10;
    }

    // console.log(random);
    console.log(`RandomVar is: ${randomVar}`);
}

sumPlusOne(5, 5);

// Scopes in JS: global scope, functional scope and block scope


// ============= Recursion =============

function sumTo(num) {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumTo(10));

function sumToRecursion(num) {
    if (num === 0) {
        return 0;
    }

    return num + sumToRecursion(num - 1); // --num also works instead of num - 1
}

console.log(`sumToRecursion result: ${sumToRecursion(10)}`);

// with an arrow function (and ternary operator)

let sumToArrow = num => num === 0 ? 0 : num + sumToArrow(--num);
console.log(`sumToArrow result: ${sumToArrow(10)}`);