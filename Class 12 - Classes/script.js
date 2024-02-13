class Vehicle {
    constructor(id, name, batch, price) {
        this.id = id;
        this.name = name;
        this.batch = batch;
        this.price = price;
    }

    printVehicle() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Batch: ${this.batch}, Price: ${this.price}$`);
    }
}

let boat = new Vehicle(1, "Zoomboat", "A1", 10000);

console.log(Vehicle);
console.log(boat);
boat.printVehicle();

// ============ Inheritance ============
console.log("============ Inheritance ============");

class WheeledVehicle extends Vehicle {
    constructor(id, name, batch, price, wheels) {
        super(id, name, batch, price);

        this.wheels = wheels;
    }

    driveVehicle() {
        console.log(`Vehicle ${this.name} is zooming on ${this.wheels} wheels.`);
    }

}

console.log(WheeledVehicle);

let bike = new WheeledVehicle(2, "ZoomBike", "B1", 1000, 2);
console.log(bike);
bike.driveVehicle();
bike.printVehicle();

// console.log(Object.getPrototypeOf(bike));
// console.log(Object.getPrototypeOf(WheeledVehicle));

// ============ Static Properties and Methods ============
console.log("============ Static Properties and Methods ============");

class Car extends WheeledVehicle {
    constructor(id, name, batch, price, wheels, engineType, ac) {
        super(id, name, batch, price, wheels);

        this.engineType = engineType;
        this.ac = ac;

        if (ac) this.price += 500;
    }

    // polymorphism
    printVehicle() {
        console.log(`We are driving the ${this.name} on ${this.wheels} wheels.`); // modified printVehicle() method
    }

    buyCar(money) {
        money >= this.price ? console.log(`You can buy ${this.name}.`) : console.log(`You need ${this.price - money}$ more to buy ${this.name}.`);
    }

    static addAc(car) {
        if (!car.ac) {
            car.ac = true;
            car.price += 500;
            console.log(`The car now has AC and the price has been increased by $500. The price is now ${car.price}$.`);
        } else {
            console.log("The car already has AC.");
        }
    }

}

let car = new Car(3, "ZoomCar", "C1", 8000, 4, "Diesel", true);

car.printVehicle();
car.buyCar(5000);

Car.addAc(car); // the static method is accessed using the class name

let car2 = new Car(4, "ZoomierCar", "C2", 10000, 4, "Petrol", false);
Car.addAc(car2);
car2.buyCar(4500);




class Calculations {
    static pi = 3.14;

    static add(num1, num2) {
        return num1 + num2;
    }

    static subtract(num1, num2) {
        return num1 - num2;
    }

    static multiply(num1, num2) {
        return num1 * num2;
    }

    static divide(num1, num2) {
        return num1 / num2;
    }
}

console.log(Calculations.pi);
console.log(Calculations.add(5, 3));

// ============ Getters and Setters ============
console.log("============ Getters and Setters ============");

class ElectricCar extends Car {
    constructor(id, name, batch, price, wheels, engineType, ac, owner) {
        super(id, name, batch, price, wheels, engineType, ac);

        this.owner = owner;
    }

    get owner() {
        console.log("We are getting the name of the owner...");
        return `The owner of the car is ${this._owner}.`;
    }

    set owner(ownerName) {
        console.log("We are setting the name of the owner...");
        ownerName.length > 3 ? this._owner = ownerName : (() => { throw new Error("The name of the owner is too short!") })();
        this._owner = ownerName;
    }
}

let electricCar = new ElectricCar(5, "ZoomElectricCar", "E1", 15000, 4, "Electric", true, "Jojo");

console.log(electricCar);
console.log(electricCar.owner);

// let teslaCar = new ElectricCar(6, "Tesla", "E2", 2000, 4, "Electric", true, "Bob"); // Error
// teslaCar.owner;

