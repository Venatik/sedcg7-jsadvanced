// ============ Destructuring ============
// Destructuring simply implies breaking down a complex structure into simple parts
// In JS, those complex structures are usually objects and arrays

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 20
}

const person2 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 25
}

const namePerson = person.firstName;
const lastNamePerson = person.lastName;
console.log(namePerson, lastNamePerson);

// ============ Object Destructuring ============

const { firstName, lastName, age } = person;
console.log(firstName, lastName);

const { firstName: myName, lastName: myLastName } = person2;
console.log(myName);
console.log(myLastName);


// without object destructuring
// const myName = person2.firstName;
// const myLastName = person2.lastName;

// ============ Array Destructuring ============

const hobbies = ["reading", "hiking", "coding"];

// without array destructuring
const hobby1 = hobbies[0];
const hobby2 = hobbies[1];
console.log(hobby1, hobby2);

// with destructuring
const [hobby01, , hobby02] = hobbies;
console.log(hobby01, hobby02);

// ============ Object Methods ============

console.log("============ Object Methods ============");

const dog = {
    isHappy: true,
    bark: function () {
        console.log("Woof! Woof!");
    }
}

// ============ Object.create() ============
console.log("============ Object.create() ============");

// Object create is a method that accepts an object as a parameter and will return a new object with all the inherited entities (properties and methods) of the object that was passed as a parameter

const barnie = Object.create(dog); // Barnie will have everything that dog has
barnie.name = "Barnie";
barnie.breed = "Dzukelce";
barnie.age = 2;
console.log("========= barnie with create", barnie);

barnie.bark();

// ============ Object.assign() ============
console.log("============ Object.assign() ============");

// Object assign is a method that can merge two objects into one. It accepts two objects as parameters and will return a new object with all the properties and methods of both objects

const addressInfo = {
    city: "Skopje",
    street: "Partizanska",
    number: 15
}

const barnieChip = Object.assign(barnie, addressInfo);
console.log("========= barnie with assign", barnieChip);

const secondChip = {
    city: "Ohrid",
    street: "Ohridska",
    number: 22
}

const barnieChipUpdate = Object.assign(barnieChip, secondChip);
console.log("========= barnieChipUpdate", barnieChipUpdate);

// ============ Object.keys() ============
console.log("============ Object.keys() ============");

// Object keys is a method that accepts an object as a parameter and will return an array of all the keys of the object (key of key-value pair)

const barnieKeys = Object.keys(barnieChipUpdate);
console.log("========= barnie keys", barnieKeys);

// ============ Object.values() ============
console.log("============ Object.values() ============");

// Object values returns all values from the object as an array (value of key-value pair)

const barnieValues = Object.values(barnie);
console.log("========= barnie values", barnieValues);

// ============ Object.entries() ============
console.log("============ Object.entries() ============");

// Object entries returns all key-value pairs from the object as an array of arrays

const barnieEntries = Object.entries(barnie);
console.log("========= barnie entries", barnieEntries);

// ============ Object.freeze() ============
console.log("============ Object.freeze() ============");

// Object freeze is a method that accepts an object as a parameter and will return the same object but with all its properties and methods locked (read-only)

Object.freeze(barnie);
barnie.name = "Rex";
barnie.friend = "Sharko";
console.log("========= frozen barnie", barnie);


// ============ Object.seal() ============
console.log("============ Object.seal() ============");

// Object seal is a method that accepts an object as a parameter and will return the same object but with all its properties locked (read-only). We can change exising properties but we can't add new ones.

const myPuppy = {};
myPuppy.name = "Johnny";
console.log(myPuppy);
Object.seal(myPuppy);
myPuppy.name = "Rex";
myPuppy.age = 2;
console.log("========= sealed puppy", myPuppy);

// ============ Dynamically adding properties ============
console.log("============ Dynamically adding properties ============");

const newDog = {};
const nameProperty = "dogName";

newDog[nameProperty] = "Random Dog Name";
console.log(newDog);

// ============ Spread Operator ============
console.log("============ Spread Operator ============");

const numbers = [1, 2, 3];

function sum(a, b, c) {
    return a + b + c;
}

console.log(sum(...numbers)); // instead of using numbers[0], numbers[1], numbers[2]

