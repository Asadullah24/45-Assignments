// Make a list of current usernames
let current_users: string[] = ["Asad", "Ali", "Ahmad", "Aftab", "Ishfaq"];

// Make a list of new usernames
let new_users: string[] = ["Asad", "Arif", "Ali", "Atif", "Imran"];

// Loop through the new_users list to check for uniqueness (case-insensitive)
for (let new_username of new_users) {
  // Check if the new username is already in use (case-insensitive)
  if (
    current_users.some(
      (username) => username.toLowerCase() === new_username.toLowerCase()
    )
  ) {
    console.log(
      `Sorry, the username "${new_username}" is already taken. Please choose a new one.`
    );
  } else {
    console.log(
      `Congratulations! The username "${new_username}" is available.`
    );
  }
}
