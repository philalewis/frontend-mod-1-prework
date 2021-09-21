// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Professor X";
var specialAbility = "Telepathy";
// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = "Good morning, " + heroName + "!";
var catchphrase = `My superpower is ${specialAbility}.`;
console.log(catchphrase);
console.log(greeting);
// Declare two variables - power AND energy - set to integers
var power = 10;
var energy = 100;
// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = power * 500;
var fullEnergy = energy + 150;
console.log(fullPower, fullEnergy);
// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = true;
var identityConcealed = false;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ["Magneto", "Apocolypse", "Juggernaut"]
var sidekicks = ["Jean Gray", "Wolverine", "Beast"]
// Print the first sidekick to your console
console.log(sidekicks[0]);
// Print the last archEnemy to the console
console.log(archEnemies[archEnemies.length - 1]);
// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("Dark Phoenix");
// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);
// Remove the first sidekick from the sidekicks array
sidekicks.shift();
// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sidekicks);
// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel
var dangerLevel = 80;
var saveTheDay = "Thank goodness we saved the day!";
var badExcuse = "I have a bad feeling about this!";
// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.
function assessSituation(danger, happyPath, sadPath) {
  if (danger > 50) {
    console.log(sadPath);
  } else if (danger <= 50 && danger >=10) {
    console.log(happyPath);
  } else {
    console.log("Meh. Hard pass.");
  }
};
assessSituation(dangerLevel, saveTheDay, badExcuse);

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."
assessSituation(99, announcement, excuse);
assessSituation(21, announcement, excuse);
assessSituation(3, announcement, excuse);
// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)
var scaryMonster = {
  name: "Godzilla",
  smell: "Ash",
  weight: "1 million tons",
  citiesDestroyed: ["Tokyo", "San Francisco", "Osaka"],
  luckyNumbers: [5, 7, 24],
  address: {
    number: 1127,
    street: "W Eufaula St",
    state: "Oklahoma",
    zip: 73069
  }
}
console.log(scaryMonster);
// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50
class SuperHero {
  constructor (name, superpower, age) {
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }
  sayName() {
    console.log(this.name);
  }
  maximizeEnergy() {
    this.energyLevel = 1000;
  }
  gainPower(number) {
    this.powerLevel += number;
  }
};

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class
var storm = new SuperHero ("Storm", "control weather", 40);
console.log(storm);
storm.gainPower(10);
console.log(storm);
storm.maximizeEnergy();
console.log(storm);
storm.sayName();

var coder = new SuperHero ("Cody the Coder", "Knows all syntax", 25);
console.log(coder);

// Reflection
// What parts were most difficult about this exerise?
// Figuring out the correct syntax for the SuperHero class was the most difficult. All it took was a little bit of Googling and I figured it out. I did not finish the exercise in 30 minutes, though.

// What parts felt most comfortable to you?
// Assigning values to variables is very easy. The concepts are all solid, but knwing the syntax is the hardest part. This will come with practice.

// What skills do you need to continue to practice before starting Mod 1?
// I need to practice the syntax for the constructor class and class methods. They are easy enough to look up, I just need to practice them so that I don't have to look them up.
