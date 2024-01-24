/*City Names: Write a function called city_country() that takes in the name of a city and its country. 
The function should return a string formatted like this:"Lahore, Pakistan"*/
let city_country = (city: string, country: string): string => {
  return `\"${city}, ${country}\"`;
};
const city1: string = city_country("Lahore", "Pakistan");
const city2: string = city_country("Karachi", "Pakistan");
const city3: string = city_country("New York", "USA");
console.log(city1);
console.log(city2);
console.log(city3);
