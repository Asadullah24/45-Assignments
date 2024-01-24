/*Cars: Write a function that stores information about a car in a Object. The function should always 
receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, such as a color or an 
optional feature. Print the Object that’s returned to make sure all the information was stored correctly.*/
function CarInfo(manufacturer: string, model: string, ...args: any[]): any {
  let car: any = {
    manufacturer,
    model,
  };
  for (let i = 0; i < args.length; i += 2) {
    let key = args[i];
    let value = args[i + 1];
    car[key] = value;
  }
  return car;
}
let mycar = CarInfo(
  "Toyota",
  "Camry",
  "Color",
  "Black",
  "Extra_feature",
  "Sunroof"
);
console.log(mycar);
