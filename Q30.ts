/*Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
Imagine you are writing code that will print a greeting to each user after they log in to a website.
Loop through the array, and print a greeting to each user:*/
let usernames: string[] = ["admin", "Eric", "Asad", "Atif", "Ali"];
for (let username of usernames) {
  if (username == "admin") {
    console.log("Hello admin,Would you like to see the report");
  } else {
    console.log(`Hello ${username}, Thanks for loging in Again `);
  }
}
export {};
