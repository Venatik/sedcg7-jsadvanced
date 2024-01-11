let divisibleBy3 = [];
for (let i = 1; i <= 1000; i++) {
    if (i % 3 === 0) {
        divisibleBy3.push(i);
    }
}
console.log(divisibleBy3);

let divisibleBy4 = [];
for (let i = 1; i <= 1000; i++) {
    if (i % 4 === 0) {
        divisibleBy4.push(i);
    }
}
console.log(divisibleBy4);

let endsWith1 = [];
for (let i = 1; i <= 1000; i++) {
    if (i % 10 === 1) {
        endsWith1.push(i);
    }
}
console.log(endsWith1);

// =============================================================

let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];

function onlyStrings(array) {
    return array.filter(function (item) {
        return typeof item === "string";
    });
}
console.log(onlyStrings(test));

function onlyNumbers(array) {
    return array.filter(function (item) {
        return typeof item === "number" && !isNaN(item);
    });
}
console.log(onlyNumbers(test));

function removeFalsy(array) {
    return array.filter(function (item) {
        return Boolean(item);
    });
}
console.log(removeFalsy(test));

window.onload = function () {
    let body = document.getElementById("body");
    let color = document.getElementById("color");

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    color.textContent = `RGB(${red}, ${green}, ${blue})`;
}

document.getElementById("generate").addEventListener("click", function () {
    let color = document.getElementById("pickColor").value;
    let fontSize = document.getElementById("fontSize").value;
    let text = document.getElementById("text").value;

    let h1 = document.createElement("h1");
    h1.style.color = color;
    h1.style.fontSize = fontSize + "px";
    h1.textContent = text;

    document.getElementById("container").appendChild(h1);

    color = document.getElementById("pickColor").value = "";
    fontSize = document.getElementById("fontSize").value = "";
    text = document.getElementById("text").value = "";
});

// =============================================================

function StudentData(firstName, lastName, birthYear, academy, grades) {
    this.firstName = !firstName ? "" : firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = grades;
}

StudentData.prototype.getAge = function () {
    let currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
}

StudentData.prototype.getInfo = function () {
    return `This is student ${this.firstName} ${this.lastName} from the academy of ${this.academy}!`;
}

StudentData.prototype.getGradesAverage = function () {
    let sum = this.grades.reduce(function (a, b) {
        return a + b;
    }, 0);
    return sum / this.grades.length; // As per Ivan's idea: https://hatchjs.com/js-average-of-array/
}

let students = [
    new StudentData("John", "Doe", 2000, "Science", [85, 90, 88]),
    new StudentData("Jane", "Smith", 2001, "Arts", [92, 88, 91]),
    new StudentData("Bob", "Johnson", 2002, "Engineering", [95, 93, 96])
];

console.log(students);
console.log(students[0].getInfo());
console.log(students[2].getGradesAverage());

// =============================================================

let names = ["Rand", "Egwenne", "Aviendha", "Matrim", "Perrin"];
let btn = document.getElementById("fillList");

btn.addEventListener("click", function () {
    let list = document.getElementById("namesList");
    list.innerHTML = "";

    for (let name of names) {
        let listItem = document.createElement("li");
        listItem.textContent = name;
        list.appendChild(listItem);
    }
});

// =============================================================

let btn2 = document.getElementById("generate2");

btn2.addEventListener("click", function () {
    let color = document.getElementById("pickColor2").value;
    let fontSize = document.getElementById("fontSize2").value;
    let items = document.getElementById("items").value.split(",");

    let ul = document.createElement("ul");
    ul.style.color = color;
    ul.style.fontSize = fontSize + "px";

    for (let item of items) {
        let li = document.createElement("li");
        li.textContent = item.trim();
        ul.appendChild(li);
    }

    color = document.getElementById("pickColor2").value = "";
    fontSize = document.getElementById("fontSize2").value = "";
    items = document.getElementById("items").value = "";

    document.getElementById("container2").appendChild(ul);
});

// =============================================================

function Student(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
}

let database = [];
let btn3 = document.getElementById("studentForm");

btn3.addEventListener("submit", function (event) {
    event.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;

    let student = new Student(firstName, lastName, age, email);
    database.push(student);

    console.log(database);

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
});

// =============================================================

let movies = ["Inception", "Interstellar", "The Dark Knight", "Memento", "The Prestige"];
let btn4 = document.getElementById("searchMovie");

btn4.addEventListener("click", function () {
    let movieName = document.getElementById("movieName").value.toLowerCase();
    let result = document.getElementById("result");

    if (movies.map(movie => movie.toLowerCase()).includes(movieName)) {
        result.textContent = `The movie can be rented.`;
    } else {
        result.textContent = `The movie can"t be rented.`;
    }

    document.getElementById("movieName").value = "";
});
