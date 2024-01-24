/*More Guests: You just found a bigger dinner table,
 so now more space is available. Think of three more guests to invite to dinner.*/
let Guest = ["Asad", "Ali", "Fahad", "Adnan"];

console.log(`${Guest[2]}, will not come`);
Guest.splice(2, 1, "Arham");

console.log(
  `Hello ${Guest[0]},I invite you to dinner. I shall very thankful to you if you come.`
);
console.log(
  `Hello ${Guest[1]},I invite you to dinner. I shall very thankful to you if you come.`
);
console.log(
  `Hello ${Guest[2]},I invite you to dinner. I shall very thankful to you if you come.`
);
console.log(
  `Hello ${Guest[3]},I invite you to dinner. I shall very thankful to you if you come.`
);
/*• Start with your program from Exercise 15. Add a print statement to the end of your program
 informing people that you found a bigger dinner table.*/
console.log(`${Guest},Hi friends. I found a bigger dinner table`);
//Add one new guest to the beginning of your array.
Guest.unshift("Ibrahim");
/*• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
  • Print a new set of invitation messages, one for each person in your list. */
Guest.splice(1, 0, "Arif");
Guest.push("Ishfaq");
console.log(
  `Hello ${Guest[0]},I invite you to dinner. I shall very thankful to you if you come.`
);
console.log(
  `Hello ${Guest[1]},I invite you to dinner. I shall very thankful to you if you come.`
);
console.log(
  `Hello ${Guest[2]},I invite you to dinner. I shall very thankful to you if you come.`
);
console.log(
  `Hello ${Guest[3]},I invite you to dinner. I shall very thankful to you if you come.`
);
console.log(
  `Hello ${Guest[4]},I invite you to dinner. I shall very thankful to you if you come.`
);
console.log(
  `Hello ${Guest[5]},I invite you to dinner. I shall very thankful to you if you come.`
);
console.log(
  `Hello ${Guest[6]},I invite you to dinner. I shall very thankful to you if you come.`
);
export {};
