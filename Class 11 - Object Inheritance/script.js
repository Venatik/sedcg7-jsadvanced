// Example 1

/* function Vehicle(id, name, batchNo, price) {
    this.id = id;
    this.name = name;
    this.batchNo = batchNo;
    this.price = price;

    this.printVehicle = function () {
        console.log(`ID: ${this.id}, Name: ${this.name}, Batch No: ${this.batchNo}, Price: ${this.price}$`);
    }
}

let wheeledVehicle = Object.create(new Vehicle(1, "Yugo", "A1", 200));

console.log(wheeledVehicle);
wheeledVehicle.printVehicle();

wheeledVehicle.drive = function () { console.log("Wroom!") };
console.log(wheeledVehicle);

wheeledVehicle.drive();

let wheeledVehicle2 = new Vehicle(1, "Opel", "A2", 1500);
let wheeledVehicle3 = {};

wheeledVehicle3.__proto__ = new Vehicle(2, "Ford", "A3", 3000);

console.log(wheeledVehicle2);
console.log(wheeledVehicle3);
*/

// Example 2

/* function Vehicle(id, name, batchNo, price) {
    this.id = id;
    this.name = name;
    this.batchNo = batchNo;
    this.price = price;

    this.printVehicle = function () {
        console.log(`ID: ${this.id}, Name: ${this.name}, Batch No: ${this.batchNo}, Price: ${this.price}$`);
    }
}

function WheeledVehicle(wheels) {
    this.wheels = wheels;

    this.drive = function () {
        console.log(`Driving on ${wheels} wheels.`);
    }
}

WheeledVehicle.prototype = Object.create(new Vehicle(0, "Mazda", "A4", 2000));

let car = new WheeledVehicle(4);

car.drive();
console.log(car);
*/

// Example 3 - this is the practical example

function Vehicle(id, name, batchNo, price) {
    this.id = id;
    this.name = name;
    this.batchNo = batchNo;
    this.price = price;

    this.printVehicle = function () {
        console.log(`ID: ${this.id}, Name: ${this.name}, Batch No: ${this.batchNo}, Price: ${this.price}$`);
    }
}

function WheeledVehicle(id, name, batchNo, price, wheels) {
    Object.setPrototypeOf(this, new Vehicle(id, name, batchNo, price));
    this.wheels = wheels;

    this.drive = function () {
        console.log(`Driving on ${wheels} wheels.`);
    }
}

let bmw = new WheeledVehicle(1, "BMW", "A5", 200000, 2);
console.log(bmw);

bmw.printVehicle();

function SuperCar(id, name, batchNo, price, wheels, topSpeed) {
    Object.setPrototypeOf(this, new WheeledVehicle(id, name, batchNo, price, wheels));
    this.topSpeed = topSpeed;

    this.drive = function () {
        console.log(`Driving on ${wheels} wheels with a top speed of ${topSpeed} km/h.`);
    }
}

let ferrari = new SuperCar(2, "Ferrari", "A6", 350000, 4, 320);

console.log(ferrari);
ferrari.drive();
ferrari.printVehicle();