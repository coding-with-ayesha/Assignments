You should create four lines that look like this:

console.log(5 + 3)

Your output should simply be four lines with the number 8 appearing once on each line.

console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);


Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.

let alienColor = 'red';

if (alienColor === 'green') {
  console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
  console.log("Congratulations! You just earned 10 points.");
}


Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.

let alienColor = 'red';

if (alienColor === 'green') {
  console.log("Congratulations! You earned 5 points.");
} else if (alienColor === 'yellow') {
  console.log("Congratulations! You earned 10 points.");
} else if (alienColor === 'red') {
  console.log("Congratulations! You earned 15 points.");
} else {
  console.log("Unknown alien color. No points earned.");
}

No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.

function greet_users(users) {
    if (users.length === 0) {
      console.log("We need to find some users!");
    } else {
      for (let user of users) {
        console.log("Hello, " + user + "!");
      }
    }
  }
  
  let users = ['John', 'Emily', 'Michael'];
  
  // Check if the list of users is not empty and greet the users
  greet_users(users);
  
  // Remove all usernames from the array to make it empty
  users = [];
  
  // Check if the list of users is empty and print the appropriate message
  greet_users(users);


  T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size, message) {
    console.log(`You have ordered a ${size}-sized shirt with the message: "${message}".`);
  }
  
  // Call the function with the desired size and message
  make_shirt('L', 'I love JavaScript!');
  


Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

  function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`You have ordered a ${size}-sized shirt with the message: "${message}".`);
  }
  
  // Create a large shirt with the default message
  make_shirt();
  
  // Create a medium shirt with the default message
  make_shirt("medium");
  
  // Create a small shirt with a custom message
  make_shirt("small", "Hello, World!");


  
  Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

  function describe_city(city, country = "Unknown") {
    console.log(`${city} is in ${country}.`);
  }
  
  // Call the function for three different cities
  describe_city("Karachi", "Pakistan");
  describe_city("New York", "USA");
  describe_city("Sydney"); // Sydney with the default country "Unknown"
  

  City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

  "Lahore, Pakistan"
  
  Call your function with at least three city-country pairs, and print the value that’s returned.
    
function city_country(city, country) {
  return `${city}, ${country}`;
}

// Call the function with three city-country pairs and print the returned values
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));


Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artist, title, tracks) {
    let album = {
      artist: artist,
      title: title
    };
  
    if (tracks !== undefined) {
      album.tracks = tracks;
    }
  
    return album;
  }
  
  // Make three dictionaries representing different albums and print the return values
  console.log(make_album("Adele", "21"));
  console.log(make_album("Ed Sheeran", "÷", 16));
  console.log(make_album("Taylor Swift", "1989", 13));

  
  Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

  function show_magicians(magicians) {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  // Make an array of magician's names
  let magician_names = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
  
  // Call the function to show the names of the magicians
  show_magicians(magician_names);

  
  Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

  function show_magicians(magicians) {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = "the Great " + magicians[i];
    }
  }
  

  Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

  function show_magicians(magicians) {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_great(magicians) {
    let modified_magicians = [];
  
    for (let magician of magicians) {
      modified_magicians.push("the Great " + magician);
    }
  
    return modified_magicians;
  }
  
  // Make an array of magician's names
  let magician_names = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
  
  // Call the function to get a new array with "the Great" added to each magician's name
  let modified_magicians = make_great([...magician_names]);
  
  // Call the function to show the original names of the magicians
  console.log("Original Magicians:");
  show_magicians(magician_names);
  
  // Call the function to show the modified names of the magicians
  console.log("\nModified Magicians:");
  show_magicians(modified_magicians);

  
  Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

  function order_sandwich(...items) {
    console.log("Sandwich summary:");
    console.log("Bread + " + items.join(" + ") + " + Bread");
  }
  
  // Call the function three times with different numbers of arguments
  order_sandwich("Ham", "Cheese");
  order_sandwich("Turkey", "Lettuce", "Tomato", "Mayo");
  order_sandwich("Peanut Butter", "Jelly", "Banana");
  

  
  Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


  function store_car_info(manufacturer, model, ...kwargs) {
    let carInfo = {
      manufacturer: manufacturer,
      model: model
    };
  
    for (let i = 0; i < kwargs.length; i += 2) {
      const key = kwargs[i];
      const value = kwargs[i + 1];
      carInfo[key] = value;
    }
  
    return carInfo;
  }
  
  // Call the function with required information and additional name-value pairs
  let car = store_car_info("Toyota", "Camry", "color", "silver", "optional feature", "sunroof");
  
  // Print the object returned by the function to check the stored information
  console.log(car);
  
