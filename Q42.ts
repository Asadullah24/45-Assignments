/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
 that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call 
 show_magicians() to see that the list has actually been modified.*/
function make_great(magicians: string[]) {
  for (let magic of magicians) {
    console.log(`The Great ${magic}`);
  }
}
make_great(["Bob", "Ash", "Messi"]);
