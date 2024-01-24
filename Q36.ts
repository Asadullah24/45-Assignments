/*T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should 
be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message
printed on it. Call the function.*/
let make_shirt = (a: string, b: string) => {
  console.log(`size:${a},message:${b}`);
};
console.log("Write the size and message of your shirt");
make_shirt("Medium", "Do good have good");
export {};
