// ============== Higher Order Functions ==============
// HOF are functions that take other functions as arguments.

let numbers = [1, 2, 3, 4, 5];
console.log("Original array:", numbers);


// ============== MAP ==============
// .map() is used to transform elements in an array. It returns the SAME number of elements in a NEW array.
console.log("============== MAP ==============");

// Normal function that returns a new array
function multiplyByTwo(array) {
    let newArray = [];

    for (const number of array) {
        newArray.push(number * 2);
    }
    return newArray;
};

let multiplied = multiplyByTwo(numbers);

// .map() with anonymous function
let multiplyBy3 = numbers.map(function (number) {
    return number * 3;
});

// .map() with arrow function - USE THIS APPROACH!!!
let multiplyBy2 = numbers.map(number => number * 2);

console.log("Using multiplyByTwo - normal JS function:", multiplied);
console.log("Using multiplyBy3 - .map() with anonymous function:", multiplyBy3);
console.log("Using multiplyBy2 - .map() with an arrow function:", multiplyBy2);

// ============== FILTER ==============
// .filter() is used to filter elements in an array. It returns ONLY the elements that will pass a certain condition.

console.log("============== FILTER ==============");

// Normal JS function that returns new array with elements larger than 3
function largerThanThree(array) {
    let newArray = [];

    for (const number of array) {
        if (number > 3) {
            newArray.push(number);
        }
    }

    return newArray;
}

let filteredArray = largerThanThree(numbers);

console.log("Filtered array with normal JS function:", filteredArray);

// Using .filter() with an anonymous function

let filteredArrayWithAnonymous = numbers.filter(function (number) {
    return number > 2;
});

console.log("Filtered with .filter() and an anonymous function:", filteredArrayWithAnonymous);

// Using .filter() with an arrow function - USE THIS APPROACH!!!

let filteredArrayWithArrow = numbers.filter(number => number > 2);

console.log("Filtered array with .filter() and an arrow function:", filteredArrayWithArrow);

// ==============  ==============
// 

console.log("==============  ==============");