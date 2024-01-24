/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function 
should have one parameter that collects as many items as the function call provides, and it should print a
summary of the sandwich that is being ordered. Call the function three times, using a different number of
arguments each time.*/
let sandwitch = (sanmdwitche: string[]) => {
  console.log(`Your ordered items is:${sanmdwitche}`);
};
console.log("order some items:");
sandwitch(["Onions", "Mayonies", "Chicken"]);
sandwitch(["Tomatos", "Onions", "Ketchup", "Egg", "Sauce"]);
sandwitch(["Mayonies", "Ketchup", "Onions", "Chicken"]);
