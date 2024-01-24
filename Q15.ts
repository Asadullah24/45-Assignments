/*Guest List: If you could invite anyone, living or deceased, to dinner,
 who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
Then use your list to print a message to each person, inviting them to dinner.*/
let Guest = ["Asad", "Ali", "Fahad", "Adnan"];
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
/*• Start with your program from Exercise 14.
 Add a print statement at the end of your program stating the name of the guest who can’t make it.*/
console.log(`${Guest[2]}, will not come`);
/*• Modify your list, 
replacing the name of the guest who can’t make it with the name of the new person you are inviting.*/
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
export {};
