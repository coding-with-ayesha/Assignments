
function make_shirt(size, message) {
    console.log(`You have ordered a ${size}-sized shirt with the message: "${message}".`);
  }
  
  // Call the function with the desired size and message
  make_shirt('L', 'I love JavaScript!');
  



  function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`You have ordered a ${size}-sized shirt with the message: "${message}".`);
  }
  
  // Create a large shirt with the default message
  make_shirt();
  
  // Create a medium shirt with the default message
  make_shirt("medium");
  
  // Create a small shirt with a custom message
  make_shirt("small", "Hello, World!");


  

  function describe_city(city, country = "Unknown") {
    console.log(`${city} is in ${country}.`);
  }
  
  // Call the function for three different cities
  describe_city("Karachi", "Pakistan");
  describe_city("New York", "USA");
  describe_city("Sydney"); // Sydney with the default country "Unknown"
  


function city_country(city, country) {
  return `${city}, ${country}`;
}

// Call the function with three city-country pairs and print the returned values
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));



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

  

  function show_magicians(magicians) {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  // Make an array of magician's names
  let magician_names = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
  
  // Call the function to show the names of the magicians
  show_magicians(magician_names);

  

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
  


  function order_sandwich(...items) {
    console.log("Sandwich summary:");
    console.log("Bread + " + items.join(" + ") + " + Bread");
  }
  
  // Call the function three times with different numbers of arguments
  order_sandwich("Ham", "Cheese");
  order_sandwich("Turkey", "Lettuce", "Tomato", "Mayo");
  order_sandwich("Peanut Butter", "Jelly", "Banana");
  

  

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
  