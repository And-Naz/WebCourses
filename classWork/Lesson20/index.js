// Import the filesystem module
const fs = require('fs');
console.log(__dirname)
// Function to get current filenames
// in directory
fs.readdir(__dirname, (err, files) => {
	if (err)
		console.log(err);
	else {
		console.log("\nCurrent directory filenames:");
		files.forEach(file => {
			console.log(file);
		})
	}
})