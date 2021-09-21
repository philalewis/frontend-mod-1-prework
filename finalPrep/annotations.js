// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear //The buildABear function takes five arguments and assigns various values to four variables
function buildABear(name, age, fur, clothes, specialPower) {
// A string is assigned to the greeting variable, which interpolates a greeting message using the `name` parameter
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
// An array is assigned to the demographics variable with the `name` and `age` parameters as the two elements
  var demographics = [name, age];
// A string is assigned to the powerSaying variable, which concatenates a message using the specialPower parameter
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // An object is assigned to the builtBear variable
  var builtBear = {
    // basicInfo is assinged the value of the demogrphics variable, which is an array
    basicInfo: demographics,
    // clothes is assigned a dynamic value of the user input to the `clothes` parameter
    clothes: clothes,
    // exterior is assigned a dynamic value of the user input to the `fur` parameter
    exterior: fur,
    // cost is assinged a static value of 49.99
    cost: 49.99,
    // sayings is assigned an array with 3 elements. The first two elements (indexes 0 and 1), are dynamic values based on the variables `greeting` and `powerSaying`.
    // The third element in the `sayings` array is a static value set to the string, "Goodnight my friend!"
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    // isCuddly is assigned a boolean value, which is initialized as true
    isCuddly: true,
  };
// returns the builtBear variable
  return builtBear
}
// Call the function twice. Various inputs are used, including arrays of different lengths as the `clothes` parameter
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz // This function accepts three arguments: num1, num2, and range, and returns multiple strings, based on the values of the arguments passed in to it.
// The arguments passed in to the function should be numbers.
function fizzBuzz(num1, num2, range) {
  // A for loop is used, starting at 0, and ending after the argument passed into the range parameter, incrementing by 1 each loop
  for (var i = 0; i <= range; i++) {
    // First condition: if both numbers are divisible by i, log "fizzbuzz" to the console
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
    // Second condition: if the first argument is divisible by i, log "fizz" to the console
    } else if (i % num1 === 0) {
      console.log('fizz');
    // Third condition: if the second argument is divisible by i, log "buzz" to the console
    } else if (i % num2 === 0) {
      console.log('buzz');
    // If neither num1 nor num2 are divisible by i, log i to the console
    } else {
      console.log(i);
    }
  }
}
// Call the function twice, using different parameters
fizzBuzz(3, 5, 100);
fizzBuzz(5, 8, 400);
