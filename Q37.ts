/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message 
that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and 
a shirt of any size with a different message.*/
let make_shirt = (
  size: string = "Large",
  message: string = "I Love Typescript"
): void => {
  console.log(`Size:${size},message:${message}`);
};

make_shirt();
make_shirt("Medium");
make_shirt("small", "Do Good have good");
export {};
