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

// ============== REDUCE ==============
// .reduce() - we will return the sum (or other operation) of all the elements of an array.

console.log("============== REDUCE ==============");

let sumReduce = numbers.reduce((total, number) => total + number);

console.log("Sum of elements in an array using .reduce():", sumReduce);

// filter out all the elements bigger than 3
// increase their value by the number 5
// add the sum of each element

let result = numbers
    .filter(number => number > 3)
    .map(number => number + 5)
    .reduce((total, number) => total + number);

console.log(result);

console.log("============== REDUCE Part 2 ==============");

// Without a higher order function
function addNumbers() {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}
console.log(addNumbers());

// With a higher order function
let sumReduceHigher = numbers.reduce((total, number) => total + number);
console.log(sumReduceHigher);

// ============== SORT ==============

console.log("============== SORT ==============");
// with .sort we will sort the elements of the array in descending and an ascending order

let sortedNums = numbers.sort();
console.log("sorted nums", sortedNums);

let numbersDescending = numbers.sort((first, second) => second - first);
console.log("sorted array - Descending", numbersDescending);

let numbersAscending = numbersDescending.sort((first, second) => first - second);
console.log("Ascending", numbersAscending);

console.log("============== SORT Part 2 ==============");

// Without a higher order function
function sortFunction(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(`Before sort: ${numbers}`);
console.log(`After sort: ${sortFunction(numbers)}`);

// With a higher order function
let numbersAscendingSort = numbers.sort((first, second) => first - second);
console.log(numbersAscendingSort);

// ============== forEach ==============

console.log("============== forEach ==============");

numbers.forEach(number => console.log(number + 3));

// ============== EVERY ==============

console.log("============== EVERY ==============");
// .every() tests every value from the array and returns true or false

let biggerThanTwo = numbers.every(num => num > 2);
console.log(biggerThanTwo);

// ============== SOME ==============

console.log("============== SOME ==============");
// .some()

let someBiggerThanTwo = numbers.some(num => num > 2);
console.log(someBiggerThanTwo);

// ============== FIND ==============

console.log("============== FIND ==============");

let cityArray = ["Skopje", "Veles", "Kumanovo", "Tetovo", "Bitola"];

let findWord = cityArray.find(word => word === "Skopje");
console.log(findWord);

// ============== FIND INDEX ==============

console.log("============== FIND INDEX ==============");

let findIndex = cityArray.findIndex(word => word === "Kumanovo");
console.log(findIndex);

// ============== INCLUDES ==============

console.log("============== INCLUDES ==============");
// .includes() returns true or false

let includesPrilep = cityArray.includes("Prilep");
console.log(includesPrilep);

// ============== FLAT ==============

console.log("============== FLAT ==============");
// .flat() - flattens the array

let newArray = [1, 2, [3, 4, [5, 6]]];

let flattenedArray = newArray.flat(2); // 2 is the depth of the array
console.log(newArray);

// ============== FLAT MAP ==============

console.log("============== FLAT MAP ==============");
// .flatMap() - flattens the array and maps it

let flatMappedArray = cityArray.flatMap(word => word.split("")); // Only .map() will return an array of arrays. Only .flat() will flatten the array. .flatMap() will do both.
console.log(flatMappedArray);

// ============== JOIN ==============

console.log("============== JOIN ==============");
// .join() - joins the elements of an array into a string

let joinedArray = cityArray.join(", ");
console.log(joinedArray);

// ============== SLICE ==============

console.log("============== SLICE ==============");
// .slice() - returns a copy of a portion of an array into a NEW array.

let slicedArray = cityArray.slice(2, 3);
console.log(slicedArray);

// ============== SPLICE ==============

console.log("============== SPLICE ==============");
// .splice() - removes or replaces existing elements and/or adds new elements in place. Splice changes the ORIGINAL array.

let splicedArray = cityArray.splice(1, 2, "Prilep");
console.log(splicedArray);
console.log(cityArray);

// ============== REVERSE ==============

console.log("============== REVERSE ==============");
// .reverse() - reverses the elements of an array. Reverse changes the ORIGINAL array.

let reversedArray = cityArray.reverse();
let reversedArray2 = [...cityArray].reverse(); // This will create a copy of the array and reverse it.
console.log(`The original array mutated: ${reversedArray}`);
console.log(`New array: ${reversedArray2}`);

let numbersReversed = [...numbers].reverse();
console.log(`New and reversed array: ${numbersReversed}`);

// Real COPY of an array
let newNumbers = [...numbers];
console.log(newNumbers);