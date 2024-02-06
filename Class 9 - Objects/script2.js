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

