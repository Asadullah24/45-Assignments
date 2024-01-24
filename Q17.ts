/*Shrinking Guest List: You just found out that your
 new dinner table won’t arrive in time for the dinner, and you have space for only two guests.*/
let Guest = ["Asad", "Ali", "Fahad", "Adnan"];
Guest.splice(2, 1, "Arham");
Guest.splice(1, 0, "Arif");
Guest.push("Ishfaq");
Guest.unshift("Ibrahim");
/*• Start with your program from Exercise 16. Add a new line that prints
 a message saying that you can invite only two people for dinner.*/
console.log(
  `${Guest},Hi friends. I feel sorry to say that due to some reasons. I can invite two persons `
);
/*Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
 a message to that person letting them know you’re sorry you can’t invite them to dinner.*/
console.log(`${Guest.pop()}, Sorry. I can't invite you to dinner`);
console.log(`${Guest.pop()}, Sorry. I can't invite you to dinner`);
console.log(`${Guest.pop()}, Sorry. I can't invite you to dinner`);
console.log(`${Guest.pop()}, Sorry. I can't invite you to dinner`);
console.log(`${Guest.pop()}, Sorry. I can't invite you to dinner`);
//Print a message to each of the two people still on your list, letting them know they’re still invited.
console.log(`${Guest.pop()}, You are still invited`);
console.log(`${Guest.pop()}, You are still invited`);
export {};
