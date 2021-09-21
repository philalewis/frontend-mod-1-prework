/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
If the vairable doorChoice is assigned a value of 1, `bearClothing` is reassigned a value of "hat". Otherwise, `bearClothing` is reassigned a value of "scarf"
2. What variable has a new value assigned to it after the first if statement executes?
`bearClothing`
3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
`scarf`
4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
If `bearChoice` is assigned a value of 1, the console logs a message reading "You offer the bear your `bearClothing` and the bear shows you a secret passage out!".
If `bearChoice` is not assigned a value of 1, the expression then evaluates whether `bearChoice` equals 2. If so, it console logs "You tell the bear your `bearClothing` is too small and it starts to cry!"
If `bearChoice` is not assigned a value of 2, the expression then evaluates whether `bearChoice` equals 3. If so, it console logs "You run as fast as you can into the next room. It's full of snakes!"
If `bearChoice` is assigned any value other than what has already been evaluated, the console logs "You stay with the bear and become it's best friend!"
5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
"You run as fast as you can into the next room. It's full of snakes!"
6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
"You tell the bear the hat is too small and it starts to cry!"
7. What is your favorite ending?
The final else statment that console logs "You stay with the bear and become it's best friend!"
*/
