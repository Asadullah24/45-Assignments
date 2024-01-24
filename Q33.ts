//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
//Store the numbers 1 through 9 in a array.
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//• Loop through the array.
for (const num of numbers) {
  let ordinalnum: string;

  if (num == 1) {
    ordinalnum = "st";
  } else if (num == 2) {
    ordinalnum = "nd";
  } else if (num == 3) {
    ordinalnum = "rd";
  } else {
    ordinalnum = "th";
  }
  console.log(`${num}${ordinalnum}`);
}
