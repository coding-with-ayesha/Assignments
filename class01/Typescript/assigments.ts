They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Define the types for the items
type Person = {
    name: string;
    age: number;
    occupation: string;
  };
  
  type Book = {
    title: string;
    author: string;
    publicationYear: number;
  };
  
  type Car = {
    make: string;
    model: string;
    year: number;
    color: string;
  };
  // Create TypeScript Objects for different items
  const person1: Person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer",
  };
  
  const book1: Book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publicationYear: 1925,
  };
  
  const car1: Car = {
    make: "Toyota",
    model: "Corolla",
    year: 2022,
    color: "Silver",
  };
  
  // Example usage:
  console.log(person1);
  console.log(book1);
  console.log(car1);
  


  Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

  function createArrayError() {
    const fruits = ["apple", "orange", "banana"];
  
    // Accessing the first element at index 0
    const fruit = fruits[0];
    console.log(fruit);
  }
  
  createArrayError();
    


  Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

  let car = 'subaru';
  
  console.log("Is car == 'subaru'? I predict True.")
  
  console.log(car == 'subaru')
  
  • Look closely at your results, and make sure you understand why each line evaluates to True or False.
  
  • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

  let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // Prediction: True (since the value of car is 'subaru')

console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda'); // Prediction: False (since the value of car is not 'honda')

console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); // Prediction: True (since the value and type of car are both 'subaru')

console.log("Is car !== 'toyota'? I predict True.");
console.log(car !== 'toyota'); // Prediction: True (since the value of car is not 'toyota')

console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); // Prediction: False (since the value of car is 'subaru')

console.log("Is car === 'Honda'? I predict False.");
console.log(car === 'Honda'); // Prediction: False (since the value is the same, but the types are different - 'subaru' vs 'Honda')

console.log("Is car !== 'SUBARU'? I predict True.");
console.log(car !== 'SUBARU'); // Prediction: True (since the value is the same, but the types are different - 'subaru' vs 'SUBARU')

console.log("Is car == undefined? I predict False.");
console.log(car == undefined); // Prediction: False (since the variable 'car' is defined and has a value)

console.log("Is car != null? I predict True.");
console.log(car != null); // Prediction: True (since the variable 'car' is defined and has a value)

console.log("Is car.length > 5? I predict False.");
console.log(car.length > 5); // Prediction: False (since the length of 'subaru' is not greater than 5)


More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array

// Tests for equality and inequality with strings
let language = 'JavaScript';

console.log("Is language == 'JavaScript'? I predict True.");
console.log(language == 'JavaScript'); // Prediction: True (since the value of language is 'JavaScript')

console.log("Is language != 'Python'? I predict True.");
console.log(language != 'Python'); // Prediction: True (since the value of language is not 'Python')

console.log("Is language == 'javascript'? I predict False.");
console.log(language == 'javascript'); // Prediction: False (string comparison is case-sensitive)

// Tests using the lower case function
let programmingLanguage = 'Python';

console.log("Is programmingLanguage.toLowerCase() == 'python'? I predict True.");
console.log(programmingLanguage.toLowerCase() == 'python'); // Prediction: True (since we convert both to lowercase for comparison)

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let number1 = 10;
let number2 = 20;

console.log("Is number1 == number2? I predict False.");
console.log(number1 == number2); // Prediction: False (number1 is 10, number2 is 20)

console.log("Is number1 != number2? I predict True.");
console.log(number1 != number2); // Prediction: True (number1 is 10, number2 is 20)

console.log("Is number1 > number2? I predict False.");
console.log(number1 > number2); // Prediction: False (number1 is not greater than number2)

console.log("Is number1 < number2? I predict True.");
console.log(number1 < number2); // Prediction: True (number1 is less than number2)

console.log("Is number1 >= 10? I predict True.");
console.log(number1 >= 10); // Prediction: True (number1 is equal to 10)

console.log("Is number2 <= 20? I predict True.");
console.log(number2 <= 20); // Prediction: True (number2 is equal to 20)

// Tests using "and" and "or" operators
let isSunny = true;
let isWeekend = false;

console.log("Is it sunny and not the weekend? I predict True.");
console.log(isSunny && !isWeekend); // Prediction: True (isSunny is true, and isWeekend is false)

// Test whether an item is in an array
let fruits = ['apple', 'orange', 'banana'];

console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruits.includes('apple')); // Prediction: True ('apple' is present in the fruits array)

// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape')); // Prediction: True ('grape' is not present in the fruits array)

Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

let alien_color = 'green';

if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points.");
}


Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.

let age = 30;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
  console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
  console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
  console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}


Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// Make an array of your three favorite fruits
let favorite_fruits = ['banana', 'strawberry', 'mango'];

// Check for certain fruits in the array
if (favorite_fruits.includes('banana')) {
  console.log("You really like bananas!");
}

if (favorite_fruits.includes('strawberry')) {
  console.log("You really like strawberries!");
}

if (favorite_fruits.includes('mango')) {
  console.log("You really like mangoes!");
}

if (favorite_fruits.includes('apple')) {
  console.log("You really like apples!");
}

if (favorite_fruits.includes('kiwi')) {
  console.log("You really like kiwis!");
}


Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let usernames = ['admin', 'Eric', 'John', 'Alice', 'Jane'];

for (let username of usernames) {
  if (username === 'admin') {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}


Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// Make a list of current usernames
let current_users = ['john', 'mary', 'jane', 'jim', 'susan'];

// Make a list of new usernames
let new_users = ['Jane', 'peter', 'alice', 'John', 'mike'];

// Convert all current usernames to lowercase for case-insensitive comparison
let lowercase_current_users = current_users.map(username => username.toLowerCase());

// Loop through new_users list to check for uniqueness
for (let new_username of new_users) {
  let lowercase_new_username = new_username.toLowerCase();
  
  if (lowercase_current_users.includes(lowercase_new_username)) {
    console.log(`The username '${new_username}' is already taken. Please enter a new username.`);
  } else {
    console.log(`The username '${new_username}' is available.`);
    // You can add code here to register the new username if needed
  }
}


Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
  let ordinalEnding;

  if (number === 1) {
    ordinalEnding = "st";
  } else if (number === 2) {
    ordinalEnding = "nd";
  } else if (number === 3) {
    ordinalEnding = "rd";
  } else {
    ordinalEnding = "th";
  }

  console.log(`${number}${ordinalEnding}`);
}


Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

let favorite_pizzas = ['pepperoni', 'margherita', 'hawaiian'];

// Printing each pizza name using a for loop
console.log("My favorite pizzas:");

for (let pizza of favorite_pizzas) {
  console.log(`I like ${pizza} pizza.`);
}

// Additional line outside the loop expressing love for pizza
console.log("I really love pizza!");



Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let animals = ['dog', 'cat', 'rabbit'];
let commonCharacteristic = 'They are all friendly and domesticated animals.';

// Printing each animal name using a for loop
console.log("These animals have a common characteristic:");

for (let animal of animals) {
  console.log(`A ${animal} would make a great pet.`);
}

// Additional line outside the loop stating what these animals have in common
console.log(`Any of these animals would make a great pet! ${commonCharacteristic}`);



