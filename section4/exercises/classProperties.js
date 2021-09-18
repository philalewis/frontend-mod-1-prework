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
// class Dog {
//   breed = "Shepard";
//   size = "Medium";
// };
// var roscoe = new Dog;
// var booRadley = new Dog;
// console.log(roscoe);
// console.log(booRadley);

// Prompt 2: Snack
// class Snack {
//   first = "Chips and Salsa";
//   second = "Cheese and Crackers";
// };
// var spicy = new Snack;
// var cheesy = new Snack;
// console.log(spicy);
// console.log(cheesy);

// Prompt 3: Shirt
// class Shirt {
//   casual = "T-shirt";
//   nice = "Button-up";
// };
// var casual = new Shirt;
// var nice = new Shirt;
// console.log(casual);
// console.log(nice);

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
// class Dog {
//   constructor() {
//     this.breed = "Shepard";
//     this.size = "Medium";
//     this.color = "Brown";
//   }
// }
// var roscoe = new Dog;
// console.log(roscoe);
//
// // Prompt 2: Snack
// class Snack {
//   constructor() {
//     this.dip = "Salsa";
//     this.chipType = "Corn";
//     this.altDip = "Guacamole";
//   }
// }
// var chipsAndSalsa = new Snack;
// console.log(chipsAndSalsa);
//
// // Prompt 3: Shirt
// class Shirt {
//   constructor() {
//     this.casual = "T-shirt";
//     this.work = "Polo";
//     this.nice = "Button-up";
//   }
// }
// var shirts = new Shirt;
// console.log(shirts);
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
class Dog {
  constructor(nme, brd, sze) {
    this.name = nme;
    this.breed = brd;
    this.size = sze;
  }
}
var myDog = new Dog("Roscoe", "Sheep Dog", "Medium");
console.log(myDog);
var caitlinsDog = new Dog("Boo Radley", "Retriever", "Large");
console.log(caitlinsDog);

// Prompt 2: Snack
class Snack {
  constructor(chp, dp, altDp) {
    this.chipType = chp;
    this.dip = dp;
    this.altDip = altDp;
  }
}
var snackOne = new Snack ("Corn", "Salsa", "Guacamole");
console.log(snackOne);
var snackTwo = new Snack ("Fritos", "Bean", "French Onion");
console.log(snackTwo);

// Prompt 3: Shirt
class Shirt {
  constructor(typ, clr, prce) {
    this.type = typ;
    this.color = clr;
    this.price = prce;
  }
}
var workShirt = new Shirt ("Polo", "Blue", 50);
console.log(workShirt);
var casualShirt = new Shirt ("T-shirt", "Green", 20);
console.log(casualShirt);
