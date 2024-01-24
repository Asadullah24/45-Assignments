// Function to make magicians great
function makeGreat(originalMagicians: { name: string }[]): { name: string }[] {
  // Create a new array to store the modified magicians
  const modifiedMagicians: { name: string }[] = [];

  // Iterate through the original array and add 'the Great' to each magician's name
  for (const magician of originalMagicians) {
    modifiedMagicians.push({ name: `the Great ${magician.name}` });
  }

  return modifiedMagicians;
}

// Function to show magicians
function showMagicians(magicians: { name: string }[]): void {
  for (const magician of magicians) {
    console.log(magician.name);
  }
}

// Example usage:
const originalMagicians = [
  { name: "Merlin" },
  { name: "Gandalf" },
  { name: "Harry Houdini" },
];

// Call makeGreat with the original array and store the modified array
const greatMagicians = makeGreat(originalMagicians);

// Display the original array
console.log("Original Magicians:");
showMagicians(originalMagicians);

// Display the modified array
console.log("\nMagicians with 'the Great':");
showMagicians(greatMagicians);
