/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog {
  breed = "Shepard";
  size = "Medium";
};
var roscoe = new Dog;
var booRadley = new Dog;
console.log(roscoe);
console.log(booRadley);

// Prompt 2: Snack
class Snack {
  first = "Chips and Salsa";
  second = "Cheese and Crackers";
};
var spicy = new Snack;
var cheesy = new Snack;
console.log(spicy);
console.log(cheesy);

// Prompt 3: Shirt
class Shirt {
  casual = "T-shirt";
  nice = "Button-up";
};
var casual = new Shirt;
var nice = new Shirt;
console.log(casual);
console.log(nice);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// // Prompt 1: Dog
class Puppers {
  constructor() {
    this.breed = "Shepard";
    this.size = "Medium";
    this.color = "Brown";
  }
}
var roscoe = new Puppers;
console.log(roscoe);

// Prompt 2: Snack
class ChipSnacks {
  constructor() {
    this.dip = "Salsa";
    this.chipType = "Corn";
    this.altDip = "Guacamole";
  }
}
var chipsAndSalsa = new ChipSnacks;
console.log(chipsAndSalsa);

// Prompt 3: Shirt
class Shirts {
  constructor() {
    this.casual = "T-shirt";
    this.work = "Polo";
    this.nice = "Button-up";
  }
}
var shirts = new Shirts;
console.log(shirts);
//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Doggy {
  constructor(name, breed, size) {
    this.name = name;
    this.breed = breed;
    this.size = size;
  }
}
var myDog = new Doggy("Roscoe", "Sheep Dog", "Medium");
console.log(myDog);
var caitlinsDog = new Doggy("Boo Radley", "Retriever", "Large");
console.log(caitlinsDog);

// Prompt 2: Snack
class BiteToEat {
  constructor(chip, dip, altDip) {
    this.chipType = chip;
    this.dip = dip;
    this.altDip = altDip;
  }
}
var snackOne = new BiteToEat ("Corn", "Salsa", "Guacamole");
console.log(snackOne);
var snackTwo = new BiteToEat ("Fritos", "Bean", "French Onion");
console.log(snackTwo);

// Prompt 3: Shirt
class TopWear {
  constructor(type, color, price) {
    this.type = type;
    this.color = color;
    this.price = price;
  }
}
var workShirt = new TopWear ("Polo", "Blue", 50);
console.log(workShirt);
var casualShirt = new TopWear ("T-shirt", "Green", 20);
console.log(casualShirt);
