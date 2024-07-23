// Display the initial welcome message
console.log('Welcome to Holberton School, what is your name?');

// Set up standard input to be used for user input
process.stdin.setEncoding('utf8');

// Event listener for data input
process.stdin.on('data', (data) => {
  // Trim the input to remove any extra whitespace
  const name = data.trim();

  // Display the user's name
  console.log(`Your name is: ${name}`);

  // Exit the process after displaying the name
  process.exit();
});

// Event listener for process exit
process.on('exit', () => {
  console.log('This important software is now closing');
});
