//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
let usernames: string[] = [];
if (usernames.length == 0) {
  console.log("we need some users");
} else {
  for (let username of usernames) {
    if (username == "admin") {
      console.log("Hello admin,Would you like to see the report");
    } else {
      console.log(`Hello ${username}, Thanks for loging in Again `);
    }
  }
}
export {};
