console.log(typeof (document));
console.log(typeof (document.getElementById));
console.log(typeof ([]));
console.log(typeof ([].push));
console.log(typeof (console));
console.log(typeof (console.log));
console.log(typeof (window));

console.log(document);
console.log(window.document);

// ========== Literal notation ==========
console.log("========== Literal notation ==========");

let person = {
    name: "John",
    surname: "Dostoevski",
    age: 44,
    isEmployed: true,

    printInfo: function () {
        console.log(`${this.name} ${this.surname} is ${this.age} years old and is ${this.isEmployed ? "employed" : "unemployed"
            }.`);
    }
}

console.log(person.name);
person.printInfo();

// These will work with var, but not with let
// console.log(window.person.name);
// window.person.printInfo();

// ========== Constructor functions ==========
console.log("// ========== Constructor functions ==========");

function Dog(name, color, age, favoriteFood) {
    this.name = name === undefined ? "Unnamed" : name;
    this.color = color;
    this.age = age;

    this.favoriteFood = favoriteFood === undefined ? new [Food("Bacon", "red")] : favoriteFood;

    this.bark = function () {
        console.log("Woof!");
    }

    this.eat = function (food) {
        this.favoriteFood.forEach(fav => {
            fav.name.toLowerCase() === food.name.toLowerCase() ? console.log("My favorite!") : "";
        })
        console.log("NOM NOM NOM");
    }
}

function Food(name, color) {
    this.name = name;
    this.color = color;
}

let dog1 = new Dog("Bart", "golden", 4, [
    new Food("beef", "red"),
    new Food("bread", "white")
])

console.log(dog1);
dog1.breed = "Afghan Hound";
console.log(dog1);

dog1.bark();
dog1.eat(new Food("beef", "red"));
dog1.eat(new Food("chicken", "white")); // Only prints NOM NOM NOM

// ========== This keyword ==========
console.log("// ========== This keyword ==========");

// this in the global scope

console.log(this);

// this in a function

function whatIsThis() {
    console.log(this)
}

whatIsThis();

let obj = {
    whatIsThis: this,

    whatIsThisMethod: function () {
        console.log(this);
    },

    arrowThis: () => {
        console.log(this);
    },

    delayedLog: function () {
        setTimeout(function () {
            console.log(this);
        }.bind(this), 50) // .bind makes the function use the object's this
    },

    delayedLogArrow: function () {
        setTimeout(() => {
            console.log(this);
        }, 50) // with arrow function, there is no need to .bind()
    }
}

console.log(obj.whatIsThis);
obj.whatIsThisMethod(); // points to the object
obj.arrowThis(); // points to the global scope
obj.delayedLog(); // points to the global scope
obj.delayedLogArrow(); // points to the object

// Try at home and experiment where this leads to

function ThisTemplate(description) {
    console.log(this);
    this.description = description;
    this.whatIsThis = this;

    this.whatIsThisFunc = function () {
        console.log(this);
    }
}

// ThisTemplate();

let template = new ThisTemplate("This is a template");

console.log(template.whatIsThis);
template.whatIsThisFunc();

