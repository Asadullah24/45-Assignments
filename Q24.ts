/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:*/
//• Tests for equality and inequality with strings
let fruit = "Apple";
console.log(`Is fruit=='Apple'? I predict true`);
console.log(fruit == "Apple");
let fruits = "Apple";
console.log(`Is fruit!='Apple'? I predict False `);
console.log(fruits != "Apple");
//Tests using the lower case function
let name1 = "Hello";
let name2 = "hello";
console.log(name1.toUpperCase == name2.toLowerCase);
console.log(name1.toUpperCase != name2.toLowerCase);

/*Numerical tests involving equality and inequality, greater than and less than, 
 greater than or equal to, and less than or equal to*/
let num1 = 10;
let num2 = 20;
console.log(num1 == num2);
console.log(num1 != num2);
console.log(num2 > num1);
console.log(num2 < num1);
console.log(num1 >= 10);
console.log(num2 <= 10);
//Tests using "and" and "or" operators
let bool1 = true;
let bool2 = false;
console.log(bool1 || bool2);
console.log(bool1 && bool2);
//• Test whether an item is in a array
let Array = [1, 2, 3, 4, 5];
let itemtocheck = 3;
console.log(Array.includes(itemtocheck));
//• Test whether an item is not in a array
let item2 = 6;
console.log(Array.includes(item2));
